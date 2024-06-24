import { Avatar, Button, Flex, List, Typography } from "antd";
import {
  PaginationPosition,
  PaginationAlign,
} from "antd/es/pagination/Pagination";
import { useState } from "react";
const data = [
  {
    name: " Name 1",
    orderTime: 1,
  },
  {
    name: " Name 2",
    orderTime: 2,
  },
  {
    name: " Name 3",
    orderTime: 1,
  },
  {
    name: " Name 4",
    orderTime: 5,
  },
];
const Activity = () => {
  const [position, setPosition] = useState<PaginationPosition>("bottom");
  const [align, setAlign] = useState<PaginationAlign>("end");
  return (
    <Flex vertical gap="small">
      <Flex>
        <Typography.Title level={3} className="primary--color">
          Recent Activities
        </Typography.Title>
        <Button type="link" className="gray--color">
          View All
        </Button>
      </Flex>
      <List
        itemLayout="horizontal"
        dataSource={data}
        pagination={{ position, align }}
        renderItem={(user, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{user.name}</a>}
              description="Ordered a new plant"
            />
            <span className="gray-color">
              {" "}
              {user.orderTime} {user.orderTime == 1 ? "day ago" : "days ago"}
            </span>
          </List.Item>
        )}
      />
    </Flex>
  );
};

export default Activity;
