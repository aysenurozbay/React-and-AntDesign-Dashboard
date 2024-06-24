import { Card, Flex, Typography, Image } from "antd";
import plant from "../assets/plant3.png";

const ContentSidebar = () => {
  return (
    <div>
      <Card className="card">
        <Flex vertical gap={"large"}>
          <Typography.Title level={4}>
            Today <br /> 5 orders
          </Typography.Title>
          <Typography.Title level={4}>
            This Month <br /> 40 orders
          </Typography.Title>
        </Flex>
        <Image
          src={plant}
          alt="plant"
          style={{
            position: "absolute",
            bottom: -50,
            left: 75,
            height: "300px",
            width: "auto",
          }}
        />
      </Card>
    </div>
  );
};

export default ContentSidebar;
