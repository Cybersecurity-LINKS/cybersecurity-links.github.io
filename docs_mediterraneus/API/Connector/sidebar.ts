import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "API/Connector/connector-api",
    },
    {
      type: "category",
      label: "Identities",
      link: {
        type: "doc",
        id: "API/Connector/identities",
      },
      items: [
        {
          type: "doc",
          id: "API/Connector/creates-user-identity",
          label: "Creates user identity",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "API/Connector/find-identity-by-wallet-address",
          label: "Find identity by wallet address",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Connector/store-vc",
          label: "Store VC",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "API/Connector/sign-data",
          label: "Sign data",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "API/Connector/generate-vp",
          label: "Generate VP",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Assets",
      link: {
        type: "doc",
        id: "API/Connector/assets",
      },
      items: [
        {
          type: "doc",
          id: "API/Connector/upload-user-asset",
          label: "Upload user asset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "API/Connector/find-asset-by-alias",
          label: "Find asset by alias",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Connector/update-nft",
          label: "Update NFT",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "API/Connector/get-asset-information",
          label: "Get asset information",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Connector/get-all-asset-aliases",
          label: "Get all asset aliases",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Connector/download-the-asset",
          label: "Download the asset",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Other",
      link: {
        type: "doc",
        id: "API/Connector/other",
      },
      items: [
        {
          type: "doc",
          id: "API/Connector/get-challenge",
          label: "Get challenge",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "API/Connector/read-from-ipfs",
          label: "Read from IPFS",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
