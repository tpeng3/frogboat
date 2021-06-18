import React from "react";
import Layout from "@components/Layout";
import { SEO } from "@components/seo";
import { Code } from "@components/code";
import Link from "@components/Link";
import Nav from "@components/Nav";

const command =
  "gatsby new my-app https://github.com/gojutin/gatsby-starter-typescript-deluxe";

const App = () => (
  <Layout>
    <SEO />
    <Code>{command}</Code>
    <Link to="/about">About</Link>
  </Layout>
);

export default App;
