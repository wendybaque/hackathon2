/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";

// eslint-disable-next-line import/no-named-as-default-member
import searchData from "../data/fakeDataMySearch";
import "../App.css";

// eslint-disable-next-line prettier/prettier

function MySearch() {
  const [list, setList] = useState(searchData);
  const addToMyFavorite = (id) => {
    setList(list.filter((elements) => elements.id !== id));
  };
  return (
    <div className="my-10 ">
      <header>
        <h1 className="text-center mx-10 text-3xl text-orange-400 font-bold">
          List of on going projects
        </h1>
      </header>
      <div className="flex flex-row border-2 border-black h-16 my-10">
        <div className="w-1/5 flex items-center ml-8">PROJECTS</div>
        <div className="w-2/5 flex items-center ml-8 ">DESCRIPTION</div>
        <div className="w-1/6 flex items-center ml-8 ">TECH</div>
        <div className="w-1/6 flex items-center ml-8 ">SKILLS</div>
        <div className="w-1/6 flex items-center ml-8 ">COORDINATOR</div>
        <div className="w-1/6 flex items-center ml-8 ">CLIENT</div>
        <div className="w-1/6 flex items-center ml-8 ">AGENCY</div>
        <div className="w-1/6 flex items-center ml-8 ">DUE DATE</div>
        <div className="w-1/6 flex items-center ml-8">STATUS</div>
        <div className="w-20 flex items-center mx-4 ">ADD TO MY FAVORITE</div>
      </div>
      {list.map((elements) => {
        return (
          <div className="flex flex-row border-2 border-white-200 py-4">
            <div className="w-1/5">{elements.project_title}</div>
            <div className="w-2/5 mr-8">{elements.project_description}</div>
            <div className="w-1/6 ml-8">{elements.technologies_used}</div>
            <div className="w-1/6 ml-8">{elements.required_skills}</div>
            <div className="w-1/6 ml-8">{elements.project_coordinator}</div>
            <div className="w-1/6 ml-8">{elements.client}</div>
            <div className="w-1/6 ml-8">{elements.agency}</div>
            <div className="w-1/6 ml-8">{elements.project_end_date}</div>
            <div className="w-1/6 ">
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
