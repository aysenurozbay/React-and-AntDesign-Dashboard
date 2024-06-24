import {
  HeartTwoTone,
  HomeOutlined,
  UserOutlined,
  ProfileOutlined,
  OrderedListOutlined,
  CarryOutOutlined,
  SettingOutlined,
  LoginOutlined,
} from "@ant-design/icons";
import { Flex, Menu, MenuProps } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  {
    label: "Dashboard ",
    icon: <HomeOutlined />,
    key: "1",
  },
  {
    label: "My Orders ",
    icon: <CarryOutOutlined />,
    key: "2",
  },
  {
    label: "ToDo ",
    icon: <OrderedListOutlined />,
    key: "3",
  },
  {
    label: "Profile ",
    icon: <ProfileOutlined />,
    key: "4",
  },
  {
    label: "Settings ",
    icon: <SettingOutlined />,
    key: "5",
  },
  {
    label: "Logout ",
    icon: <LoginOutlined />,
    key: "6",
  },
];

const Siderbar = () => {
  return (
    <>
      <Flex align="center" justify="center">
        <div className="logo">
          <HeartTwoTone twoToneColor="#eb2f96" />
        </div>
      </Flex>
      <Menu
        mode="inline"
        defaultOpenKeys={["1"]}
        className="menu-bar"
        items={items}
      />
    </>
  );
};

export default Siderbar;
