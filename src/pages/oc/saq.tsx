import React from "react";
import { Layout } from "@components/layout";
import { SEO } from "@components/seo";
import { Code } from "@components/code";
import Link from "@components/Link";

const command =
  "gatsby new my-app https://github.com/gojutin/gatsby-starter-typescript-deluxe";

const SAQAboutPage = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
  </Layout>
);

export default SAQAboutPage;
