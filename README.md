# CyberLINKS docs

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.
### Prerequisites
- **Node** >= 20
### Local Development

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

```bash
npm run start
```

~~The following command will generate API docs for all of the OpenAPI specifications referenced in your `docusaurus-plugin-openapi-docs` config.~~
```bash
npx docusaurus gen-api-docs all
```
---
30/09/2024: upgraded Docusaurus to version 3.5.2 but the generator creates `.mdx` files with errors. Feature to be reviewed in the future.


For more commands look here: [OpenAPI Docs](https://docusaurus-openapi.tryingpan.dev/#generating-openapi-docs)

