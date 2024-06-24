import { Flex } from "antd";
import ContentSidebar from "./ContentSidebar";
import Activity from "./Activity";

const SideContent = () => {
  return (
    <Flex vertical style={{ width: 350 }} gap={"2.3rem"}>
      <ContentSidebar />
      <Activity />
    </Flex>
  );
};

export default SideContent;
