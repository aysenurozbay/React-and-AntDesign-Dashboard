import { Button, Card, Flex, Typography, Image } from "antd";
import plantData from "../locale/plantData";

const { Meta } = Card;
const ProductsList = () => {
  return (
    <>
      <Flex align="baseline" justify="space-between">
        <Typography.Title level={3} className="primary--color">
          My Listing
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <Flex align="baseline" gap="large">
        {plantData.map((plant) => (
          <Card key={plant.id} hoverable className="plant-card">
            <Image src={plant.picture} style={{ width: "130px" }} />

            <Meta title={plant.name} style={{ marginTop: "1rem" }} />
          </Card>
        ))}
      </Flex>
    </>
  );
};

export default ProductsList;
