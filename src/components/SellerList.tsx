import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Card, Divider, Flex, Tooltip, Typography } from "antd";

const SellerList = () => {
  return (
    <Flex align="center" justify="space-between" gap={"large"}>
      <Flex vertical gap="small" className="top-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} className="primary--color">
            Top Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>

        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56s00",
                  backgroundColor: "#fde3cf",
                  cursor: "progress",
                },
              }}
              size={"large"}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar
                  shape="circle"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical>
              <Typography.Text type="secondary" strong>
                1,239 plant sold
              </Typography.Text>
              <Typography.Text type="secondary">10 seller </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
      <Flex vertical gap="small" className="featured-seller">
        <Flex align="center" justify="space-between">
          <Typography.Title level={5} className="primary--color">
            Featured Seller
          </Typography.Title>
          <Button type="link" className="gray--color">
            View All
          </Button>
        </Flex>
        <Card>
          <Flex align="center" justify="space-evenly">
            <Avatar.Group
              max={{
                count: 5,
                style: {
                  color: "#f56s00",
                  backgroundColor: "#fde3cf",
                  cursor: "progress",
                },
              }}
              size={"large"}
            >
              <Tooltip title="User 1" placement="top">
                <Avatar
                  shape="circle"
                  src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
              <Tooltip title="User 2" placement="top">
                <Avatar src="https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp" />
              </Tooltip>
            </Avatar.Group>
            <Divider type="vertical" className="divider" />
            <Flex vertical>
              <Typography.Text type="secondary" strong>
                1,239 plant sold
              </Typography.Text>
              <Typography.Text type="secondary">10 seller </Typography.Text>
            </Flex>
          </Flex>
        </Card>
      </Flex>
    </Flex>
  );
};

export default SellerList;
