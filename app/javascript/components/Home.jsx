import { Layout, Typography, Col, Row } from "antd";

import React from "react";
import "antd/dist/antd.css";
import Header from "./Header";
import Pokemon from "./Pokemon";

const { Content } = Layout;
const { Title } = Typography;

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