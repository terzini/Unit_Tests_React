import React from "react";
import ListItem from "./ListItem";

const List = props => {
  const { items } = props;

  return items.length > 0 ? (
    items.map(item => <ListItem key={item.id} {...item} />)
  ) : (
    <div> No items found.</div>
  );
};
export default List;
