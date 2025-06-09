---
index: openwebui
sidebar_position: 4
---

# Using Chatbot UI


This guide shows how to deploy [Open WebUI](https://github.com/open-webui/open-webui) Chatbot UI interface and connect it to your LLMBoost server.

By the end, you'll have:
- A self-hosted Chatbot UI running in Docker
- An LLMBoost server with OpenAI-compatible API proxy
- SSH port forwarding to access it remotely

---

### Step 1: Start the Server from within the LLMBoost container

Use the following command to serve a model with LLMBoost:
```bash
llmboost serve --model_name meta-llama/Llama-3.1-8B-Instruct --streaming
```

### Step 2: Run Chatbot UI

There are two ways of starting the UI:

**Option 1:** Run Chatbot UI Inside the LLMBoost Container

> ⚠️ **Important:** This command must be run on the **same server** where your LLMBoost server is running. Chatbot UI connects to the backend using `http://localhost:8011/v1`, which assumes both are on the same machine.


Use the following commands to launch Chatbot UI:

```bash
export HUGGING_FACE_HUB_TOKEN=<your-hf-token>
export OPENAI_API_BASE_URL=http://localhost:8011/v1
export BYPASS_EMBEDDING_AND_RETRIEVAL=true

open-webui serve --host 0.0.0.0 --port 8080
```

**Option 2:** Run Chatbot UI in a Separate Docker Container

Alternatively, you can run the UI in a standalone Docker container (on the same machine):

```bash
docker run \
  --env=OPENAI_API_BASE_URL=http://localhost:8011/v1 \
  --env=ENABLE_OLLAMA_API=false \
  --env=OPENAI_API_KEY=no-token-needed \
  --volume=/data/open-webui-volumes:/app/backend/data \
  --network=host \
  --restart=always \
  ghcr.io/open-webui/open-webui:main
```

This setup assumes that LLMBoost is running on the same host, as the UI connects to it via http://localhost:8011.
If your LLMBoost server is on a different machine, update the OPENAI_API_BASE_URL to point to the correct IP or hostname (e.g., http://llmboost-server-ip:8011).

### Step 3: Access Chatbot UI Remotely via SSH (Optional)

>  **Note**: Only required if you're running LLMBoost and Chatbot UI on a remote server

If your LLMBoost server is running on a remote machine (e.g., a cloud GPU instance), you can securely access the WebUI and backend ports from your local machine using SSH port forwarding.

Use the following command from your **local machine**:

```bash
ssh -L 8080:localhost:8080 -L 8011:localhost:8011 john@10.1.1.6
```

Breakdown of each part:

| Segment |	Description |
|----------|-------------|
| `ssh` |	Start a secure shell (SSH) session |
| `-L 8080:localhost:8080` |	Forward local port `8080` to remote port `8080` (ChatBot UI) |
| `-L 8011:localhost:8011` |	Forward local port `8011` to remote port `8011` (**LLMBoost** API server) |
| `john@10.1.1.6` |	SSH login using the username `john` to the remote server at `10.1.1.6` |

## Step 4: Start Chatting!

Once everything is set up and the ports are forwarded (if using a remote server), you can access the Chatbot UI in your local browser:

```bash
http://localhost:8080
```

This will load the **Chatbot UI** interface, connected to your **LLMBoost backend** running on port `8011`.

**Enjoy chatting with your local model in private!**
