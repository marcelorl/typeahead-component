import React from "react";

export default function TagBox({ tag, onClickDelete }) {
  return (
    <li className="tag-box">
      {tag} <button onClick={() => onClickDelete(tag)}>X</button>
    </li>
  );
}
