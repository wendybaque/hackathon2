import React from "react";
import json from "../data/fakedata";

function MyProjects() {
  return json.map((elements) => {
    return (
      <div className="flex flex-row">
        <div>{elements.nom}</div>
        <div>{elements.description}</div>
        <div>{elements.tech}</div>
        <div>{elements.agence}</div>
        <div>{elements.status}</div>
      </div>
    );
  });
}

export default MyProjects;
