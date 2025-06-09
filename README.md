# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

Refer here for complete documentation on installing Docusaurus: https://docusaurus.io/docs/installation

## Installation

If you haven't built the `node_modules` directory then you will need to run:

```bash
npm install
```

If you run into issues then likely your `nodejs` version needs to be updated, you can do this with:

```bash
sudo npm install -g n
sudo n latest
sudo n prune
```

Then retry `npm install`.

## Development Server

You can start a development server that allows you to update and view the content in real-time.

```bash
cd llmboost/docs/website
npm run clear
npm run start
```

To test the static build you can use:

```bash
npm run build
```