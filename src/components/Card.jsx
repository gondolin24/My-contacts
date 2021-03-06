import React from "react";
import Avatar from "./Avatar";
import Details from "./Details";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar avatarImg={props.img}/>
      </div>
      <div className="bottom">
        <Details detailInfo={props.phone} />
        <Details detailInfo={props.email} />
        <Details detailInfo={props.title} />
        <Details detailInfo={props.passion} />
      </div>
    </div>
  );
}

export default Card;
