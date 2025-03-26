import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "API/Verifier/verifier-api",
    },
    {
      type: "category",
      label: "Nonce",
      items: [
        {
          type: "doc",
          id: "API/Verifier/get-challenge",
          label: "Retrieve nonce",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Verify",
      items: [
        {
          type: "doc",
          id: "API/Verifier/verify-vp",
          label: "Verify VP",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
