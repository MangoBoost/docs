---
sidebar_position: 2
---
# Using Multiple GPUs in Parallel

In a server with multiple GPUs, LLMBoost supports multiple dimensions of parallelism to maximize GPU utilization, scalability, and inference throughput. These parallelism strategies can be configured independently or combined, depending on your deployment needs.

### 1. Tensor Parallelism (TP)

Tensor Parallelism allows a single model to be split across multiple GPUs by dividing large tensor operations (like attention and feedforward layers). Each GPU handles a slice of the computation in parallel.

- **When to use:** Your model is too large to fit on a single GPU.
- **Parameter:** `tp` (e.g., `tp=2` for 2-way tensor parallelism)

### 2. Data Parallelism (DP)

Data Parallelism replicates the model across GPUs or instances and feeds different input batches to each replica. This improves throughput by running multiple inference tasks in parallel.

- **When to use:** You have multiple users or concurrent requests.
- **Parameter:** `dp` (e.g., `dp=4` for 4 parallel workers)

### 3. Pipeline Parallelism (Coming Soon)

LLMBoost is designed with extensibility for pipeline parallelism, where model layers are split across different GPUs or nodes. This allows extremely large models to run across multiple devices in a sequence of stages.

> 🚧 *Note: Pipeline Parallelism is currently experimental and not yet available in the SDK.*

### Choosing the Right Strategy

| Use Case | Suggested Parallelism |
|----------|------------------------|
| Model doesn't fit in a single GPU | Tensor Parallelism (`tp`) |
| Multiple concurrent users | Data Parallelism (`dp`) |
| Maximize GPU utilization | Combine `tp` + `dp` |
| Ultra-large models (future) | Pipeline Parallelism |

---

### Example Configuration

```python
LLMBoost(
    model_name="meta-llama/Llama-3.1-70B-Instruct",
    tp=2,
    dp=4,
    ...
)
