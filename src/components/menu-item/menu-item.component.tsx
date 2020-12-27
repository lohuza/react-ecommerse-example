import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

import "./homepage.styles.scss";

interface Props {
  title: string;
  imageUrl: string;
  size?: string;
  linkUrl: string;
}

const MenuItem: React.FC<RouteComponentProps & Props> = ({ title, imageUrl, size, linkUrl, history, match }) => (
  <div className={`${size ?? ""} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
    <div className="content">
      <h1 className="title">{title.toUpperCase()}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
