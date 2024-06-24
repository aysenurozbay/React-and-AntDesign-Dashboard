import {
  MessageOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Flex } from "antd";
import { Typography } from "antd";
import Search from "antd/es/input/Search";

const { Title } = Typography;

const CustomHeader = () => {
  return (
    <Flex align="center" justify="space-between">
      <Title level={3} type="secondary">
        Welcome back , User
      </Title>
      <Flex align="center" gap="3rem">
        <Search placeholder="Search..." allowClear />

        <Flex align="center" gap="10px">
          <MessageOutlined className="header-icon" />
          <NotificationOutlined className="header-icon" />
          <Avatar icon={<UserOutlined />} className="header-icon" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CustomHeader;
