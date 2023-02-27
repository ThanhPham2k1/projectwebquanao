import React from "react";
import { Col, Layout, Row } from "antd";
import AppHeader from "./components/Appheader/Appheader";
import AppRoutes from "./Routes";
import Home from "./Home/Home";


const { Header, Content } = Layout;

const App = () => (

  <div>

    <Layout>
      <Row gutter={[0, 32]}>
        <Col span={24}>
          <Header>
            <AppHeader />
          </Header>
        </Col>
        <Col span={22} offset={1}>
          <Content>
            <AppRoutes />
          </Content>
        </Col>
      </Row>
    </Layout>
    <Home />
    <div>
      
    </div>
  </div>

);

export default App;
