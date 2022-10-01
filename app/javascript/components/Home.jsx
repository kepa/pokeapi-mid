import { Layout, Typography, Input, Col, Row } from "antd";

import React, { useState }  from "react";
import "antd/dist/antd.css";
import Header from "./Header";
import Pokemon from "./Pokemon";

const { Content, Footer } = Layout;
const { Title, Paragraph, Text, Link } = Typography;
const { Search } = Input;

let searchQuery = "blastoise";


export default () => (
  
  
  <Layout className="layout">
    <Content>
    
    <Row>
      <Col span={8}/> 

      <Col span={8}>  
        <div className="content" >
          <Title>Pokedex: Abilities</Title>
          <Pokemon poke_name={searchQuery} />
         </div>
       </Col>

      <Col span={8}/>
      </Row>

    </Content>
    
  </Layout>

);