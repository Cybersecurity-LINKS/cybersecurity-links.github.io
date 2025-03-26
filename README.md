# CyberLINKS docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
### Prerequisites
- **Node** >= 20
### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
npm install
npm run start
```

### Build APIs from yaml
To build APIs file from yaml, first configure the path correctly in the *docusaurus.config.js* and then run
```bash
npm run docusaurus gen-api-docs all
```
---

For more information look here: [OpenAPI Docs](https://docusaurus-openapi.tryingpan.dev/#generating-openapi-docs)

