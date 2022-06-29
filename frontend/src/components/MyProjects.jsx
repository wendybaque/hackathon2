/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import json from "../data/fakedata";

function MyProjects() {
  const [list, setList] = useState(json);
  const deleteProject = (id) => {
    setList(list.filter((elements) => elements.id !== id));
  };
  return (
    <div className="mx-4">
      <div className="flex flex-row h-16">
        <div className="w-1/5 ">Projet</div>
        <div className="w-2/5 mr-10 ">Description</div>
        <div className="w-1/6 ml-10 ">Tech</div>
        <div className="w-1/6 ml-10 ">Agence</div>
        <div className="w-1/6 ">Statut</div>
        <div className="w-20 mx-4 ">Delete</div>
      </div>
      {list.map((elements) => {
        return (
          <div className="flex flex-row border-2  border-gray-200 py-4">
            <div className="w-1/5">{elements.nom}</div>
            <div className="w-2/5 mr-10">{elements.description}</div>
            <div className="w-1/6 ml-10">{elements.tech}</div>
            <div className="w-1/6 ml-10">{elements.agence}</div>
            <div className="w-1/6 flex items-center">
              {elements.status === "pending" ? (
                <div className="flex justify-center w-2/3 p-4 bg-red-400  rounded-full">
                  Pending
                </div>
              ) : elements.status === "in progress" ? (
                <div className="flex justify-center w-2/3 p-4 bg-yellow-400 rounded-full ">
                  In progress
                </div>
              ) : (
                <div className="flex justify-center w-2/3 p-4 bg-green-400 rounded-full ">
                  Finished
                </div>
              )}
            </div>
            <div
              className="grid border-2 rounded-full h-10 w-20 mx-4 place-content-center text-red-700 text-bold"
              type="button"
              onClick={() => deleteProject(elements.id)}
            >
              X
            </div>
          </div>
        );
      })}
      ;
    </div>
  );
}

export default MyProjects;
