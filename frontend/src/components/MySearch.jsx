/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */

import React, { useState } from "react";
import json from "../data/fakeDataMySearch";
import "../App.css";

// eslint-disable-next-line prettier/prettier

function MySearch() {
  const [list, setList] = useState(json);
  const addToMyFavorite = (id) => {
    setList(list.filter((elements) => elements.id !== id));
  };
  return (
    <div className="mx-4">
      <header>
        <h1 className="text-center"> List of on going project</h1>
      </header>
      <div className="flex flex-row border-2 border-black h-16">
        <div className="w-1/5 flex items-center ">PROJECTS</div>
        <div className="w-2/5 flex items-center mr-10 ">DESCRIPTION</div>
        <div className="w-1/6 flex items-center  ml-10 ">TECH</div>
        <div className="w-1/6 flex items-center ml-10 ">AGENCY</div>
        <div className="w-1/6 flex items-center">STATUS</div>
        <div className="w-20 flex items-center mx-4 ">ADD TO MY FAVORITE</div>
      </div>
      {list.map((elements) => {
        return (
          <div className="flex flex-row border-2  border-wwhite-200 py-4">
            <div className="w-1/5">{elements.project_title}</div>
            <div className="w-2/5 mr-10">{elements.description}</div>
            <div className="w-1/6 ml-10">{elements.tech}</div>
            <div className="w-1/6 ml-10">{elements.agency}</div>
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
              className="grid border-2 drop-shadow-xl cursor-pointer rounded-full h-10 w-20 mx-4 place-content-center hover:bg-red-600 hover:text-white hover:border-4 text-red-700 text-bold"
              type="button"
              onClick={() => addToMyFavorite(elements.id)}
            >
              Follow
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MySearch;
