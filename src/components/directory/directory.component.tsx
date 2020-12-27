import React, { useEffect, useState } from "react";
import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

interface Section {
  id: number;
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const Directory: React.FC = () => {
  const [sections, setSections] = useState<Array<Section>>([]);

  useEffect(() => {
    setSections([
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "1",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "2",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "3",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "4",
      },
    ]);

    return () => {
      console.log("destruct");
    };
  }, []);

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps}) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
