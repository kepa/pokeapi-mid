import { Layout, Typography, Input, Col, Row } from "antd";

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
    
    <Row>
      <Col span={8}/> 

      <Col span={8}>  
        <div className="content" >
          <Title>Pokedex: Abilities</Title>
          <Search
          placeholder="Serach pokemon"
          enterButton="Search"
          size="large"
          onSearch={onSearch}
          />
          <Pokemon poke_name={searchQuery} />
         </div>
       </Col>

      <Col span={8}/>
      </Row>

    </Content>
    
  </Layout>

);