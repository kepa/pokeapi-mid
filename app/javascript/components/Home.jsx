import { Layout } from "antd";
import React from "react";
import "antd/dist/antd.css";
import Header from "./Header";
import Pokemon from "./Pokemon";

const { Content, Footer } = Layout;

export default () => (
  <Layout className="layout">
    <Header />
    <Content>
      <div className="site-layout-content" >
        <h1>Pokedex: Abilities</h1>
        <Pokemon />
       </div> 
    </Content>
    <Footer style={{ textAlign: "center" }}>Lucas Falbo ©2022.</Footer>
  </Layout>
);