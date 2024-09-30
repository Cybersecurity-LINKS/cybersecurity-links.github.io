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

### Swagger UI generation
At the moment it has been used a custom React component for rendering openapi documents [swagger-ui-react](https://www.npmjs.com/package/swagger-ui-react).
The API section of the mediterraneus protocol can be used as an example for the usage.
This component should be able to read specs pointed to a url, as well as `yaml` and `json` files. However some parsing error have been experienced so it is required to manually convert the yaml spec into a json file
#### How to publish an API:
1. Add your yaml Openapi specification in `apis/specs/`
2. Convert the yaml file in JSON format and create a json file in `/apis/render`
3. Import the file in a new `.mdx` file and export the custom component

**Example:**
```jsx
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import raw from "../../apis/render/issuer.json"
import "./style.css"

export default function Hello() {
  return <SwaggerUI spec={raw}/>
}
```