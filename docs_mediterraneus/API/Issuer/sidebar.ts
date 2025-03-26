import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "API/Issuer/issuer-api",
    },
    {
      type: "category",
      label: "UNTAGGED",
      items: [
        {
          type: "doc",
          id: "API/Issuer/get-challenge",
          label: "Get challenge",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Issuer/create-credential",
          label: "Issue VC",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
