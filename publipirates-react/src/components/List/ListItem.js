import React from "react";
import Text from "@/components/Text";

const ListItem = ({ children }) => (
  <Text as="li" className="mb-2">
    <Text fontFamily="secondary">{children}</Text>
  </Text>
);

export default ListItem;
