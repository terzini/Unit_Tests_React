import React from "react";

const ListItem = props => {
  const { title, image, url } = props;

  return (
    <div className="listItem">
      <div
        style={{ backgroundImage: `url(${image})` }}
        className="listItem__image"
      />
      <div className="listItem__info">
        <span className="listItem__title">{title}</span>
        <a className="listItem__Link" href={url}>
          Link
        </a>
      </div>
    </div>
  );
};

export default ListItem;
