import React from "react";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

interface ComponentProps {
  title: string;
  items: Array<Item>;
}

interface Item {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}

const PreviewCollection: React.FC<ComponentProps> = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((_, idx) => idx < 4)
          .map(({ id, ...itemProps }) => (
            <CollectionItem key={id} id={id} {...itemProps} />
          ))}
      </div>
    </div>
  );
};

export default PreviewCollection;
