import { Layout, Typography } from "antd";
import React from "react";
import "antd/dist/antd.css";
import Header from "./Header";
import Pokemon from "./Pokemon";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;

export default () => (
  <Layout className="layout">
    <Header />
    <Content>
      <div className="site-layout-content" >
        <Title>Pokedex: Abilities</Title>
        <Pokemon />
       </div> 
    </Content>
    <Footer style={{ textAlign: "center" }}>Lucas Falbo ©2022.</Footer>
  </Layout>
);