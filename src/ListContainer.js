import React, { useEffect, useState } from "react";
import List from "./List";
import { getData } from "./requests";

const transformData = items =>
  items
    .map(item => ({
      id: item.mal_id,
      title: item.title,
      url: item.url,
      image: item.image_url
    }))
    .slice(0, Math.floor(Math.random() * 10));

async function loadData(setError, setItems, setIsLoading) {
  const data = await getData();
  setError(data.error);
  setItems(transformData(data.items));
  setIsLoading(false);
}

const ListContainer = props => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadData(setError, setItems, setIsLoading);
  }, []);

  const onClick = async e => {
    setIsLoading(true);
    loadData(setError, setItems, setIsLoading);
  };

  return (
    <>
      <input
        type="button"
        value="Refresh"
        className="button"
        onClick={onClick}
        disabled={isLoading}
      />
      {error ? <div classNam="error">{error}</div> : <List items={items} />}
    </>
  );
};

export default ListContainer;
