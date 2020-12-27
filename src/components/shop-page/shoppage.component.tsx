import React, { useState, useEffect } from "react";
import PreviewCollection from "../preview-collection/preview-collection.component";

import ITEMS, { Section } from "./shopData";
// interface ComponentProps {

// }

const ShopPage: React.FC = () => {
  const [items, setItems] = useState<Section[]>([]);

  useEffect(() => {
    setItems(ITEMS);
  }, []);

  return (
    <div className="shop-page">
      {items.map((item) => (
        <PreviewCollection key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ShopPage;
