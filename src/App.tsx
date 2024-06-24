import { Button, Flex, Layout } from "antd";
import { useState } from "react";
import Siderbar from "./components/Siderbar";
import "./App.css";
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import CustomHeader from "./components/CustomHeader";
import MainContent from "./components/MainContent";
import SideContent from "./components/SideContent";
const { Sider, Header, Content } = Layout;
export const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Layout>
      <Sider
        theme="light"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="sider"
      >
        <Siderbar />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
          onClick={() => setCollapsed(!collapsed)}
          className="trigger-btn"
        />
      </Sider>
      <Layout>
        <Header className="header">
          <CustomHeader />
        </Header>
        <Content className="content">
          <Flex gap="large">
            <MainContent />
            <SideContent />
          </Flex>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
