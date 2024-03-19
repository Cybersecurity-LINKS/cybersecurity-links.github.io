# CyberLINKS docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
npm run start
```

The following command will generate API docs for all of the OpenAPI specifications referenced in your `docusaurus-plugin-openapi-docs` config.
```bash
npx docusaurus gen-api-docs all
```
For more commands look here: [OpenAPI Docs](https://docusaurus-openapi.tryingpan.dev/#generating-openapi-docs)

