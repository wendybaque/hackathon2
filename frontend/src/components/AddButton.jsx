import React from "react";
import { Link } from "react-router-dom";

import "./AddButton.css";

export default function AddButton() {
  return (
    <Link to="/Form">
      <div className="add_button">
        <button type="button">+</button>
      </div>
    </Link>
  );
}
