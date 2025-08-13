import Wrapper from "@/layout/wrapper";
import SEO from "@/components/seo";
import React from "react";
import Header from "@/layout/header/header";
export default function Home() {
  return (
    <Wrapper>
      <SEO pageTitle="Home" />
      <Header />
    </Wrapper>
  );
}
