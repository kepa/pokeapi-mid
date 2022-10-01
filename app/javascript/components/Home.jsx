import { Layout, Typography, Input } from "antd";

import React from "react";
import "antd/dist/antd.css";
import Header from "./Header";
import Pokemon from "./Pokemon";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;

let searchQuery = "blastoise";
const onSearch = (value) => {
  console.log(value)
  searchQuery = value
};

export default () => (
  <Layout className="layout">
    <Content>
      <div className="site-layout-content" >
        <Title>Pokedex: Abilities</Title>
        <Search
        placeholder="input search text"
        enterButton="Search"
        size="large"
        onSearch={onSearch}
        />
        <Pokemon poke_name={searchQuery} />
       </div> 
    </Content>
    
  </Layout>
);