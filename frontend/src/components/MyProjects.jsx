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
    <div className="mx-4 bg-white">
      <div className="flex flex-row border-2 h-10">
        <select className="w-2/5 flex items-center bg-white">
          <option>FOLLOWED PROJECTS</option>
          {list.map((elem) => {
            return <option value="">{elem.nom}</option>;
          })}
        </select>
        <select className="w-1/6 flex items-center bg-white  ml-10 ">
          <option>AGENCY</option>
          {list.map((elem) => {
            return <option value="">{elem.agence}</option>;
          })}
        </select>
        <select className="w-1/6 flex items-center bg-white  ml-10 ">
          <option>STATUS</option>
          {list.map((elem) => {
            return <option value="">{elem.status}</option>;
          })}
        </select>
        <div className="w-20 flex items-center mx-4 " />
      </div>
      <div className="">
        {list.map((elements) => {
          return (
            <div className="flex flex-row border-2 hover:bg-slate-200 border-gray-200">
              <div className="flex items-center w-2/5">{elements.nom}</div>
              <div className="flex items-center w-1/6 ml-10">
                {elements.agence}
              </div>
              <div className="w-1/6 flex  ml-10">
                {elements.status === "pending" ? (
                  <div className="flex justify-center max-h-10 w-full mx-1 items-center text-xs bg-red-400 rounded-full">
                    Pending
                  </div>
                ) : elements.status === "in progress" ? (
                  <div className="flex justify-center max-h-10 w-full mx-1 items-center text-xs bg-yellow-400 rounded-full ">
                    In progress
                  </div>
                ) : (
                  <div className="flex justify-center w-full mx-1 items-center max-h-10 text-xs bg-green-400 rounded-full ">
                    Finished
                  </div>
                )}
              </div>
              <div
                className="grid drop-shadow-xl cursor-pointer rounded-full h-10 w-10 mx-4 place-content-center hover:bg-red-600 hover:text-white hover:border-4 text-red-700 font-bold"
                type="button"
                onClick={() => deleteProject(elements.id)}
              >
                X
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyProjects;
