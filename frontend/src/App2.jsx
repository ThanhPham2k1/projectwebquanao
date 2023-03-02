import { Col, Layout, Row } from 'antd';
import React from 'react';
import AppHeader from './layouts/components/Appheader/Appheader';
import AppRoutes from './runter';

const { Header, Content } = Layout;

const App2 = () => {
    return (
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
    );
};

export default App2;
