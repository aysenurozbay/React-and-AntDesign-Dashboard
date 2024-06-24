import { Button, Card, Flex, Typography } from "antd";
const { Text, Link } = Typography;
const Banner = () => {
  return (
    <Card style={{ height: 260, padding: "20px" }}>
      <Flex vertical gap="30px">
        <Flex vertical align="flex-start">
          <Typography.Title level={2}>
            Create and Sell Products
          </Typography.Title>

          <Text type="secondary" strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          </Text>
        </Flex>
        <Flex gap="large">
          <Button type="primary" size="large">
            Explore More
          </Button>
          <Button size="large">Top Sellers</Button>
        </Flex>
      </Flex>
    </Card>
  );
};

export default Banner;
