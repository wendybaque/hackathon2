/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";

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
          List of ongoing projects
        </h1>
      </header>
      <div className="flex flex-row border-2 border-black h-16 mt-10">
        <Link to="/" className="w-1/3 ">
          <div className="flex items-center">PROJECTS</div>
        </Link>
        <div className="w-1/2 mr-8 flex items-center">DESCRIPTION</div>
        <div className="w-1/6 flex items-center">TECH</div>
        <div className="w-1/6 flex items-center">SKILLS</div>
        <div className="w-1/3 flex items-center">COORDINATOR</div>
        <div className="w-1/6 flex items-center">CLIENT</div>
        <div className="w-1/6 flex items-center">AGENCY</div>
        <div className="w-1/6 flex items-center">DUE DATE</div>
        <div className="w-1/6 flex items-center">STATUS</div>
        <div className="w-1/6 flex items-center border-1 " />
      </div>
      {list.map((elements) => {
        return (
          <div className="flex flex-row  hover:bg-slate-200 border-2 border-white-200 py-4">
            <Link to="/Project" className="w-1/3 ">
              <div className="  ">{elements.project_title}</div>
            </Link>

            <div className="w-1/2 mr-8 ">{elements.project_description}</div>

            <div className="w-1/6 ">{elements.technologies_used}</div>
            <div className="w-1/6 ">{elements.required_skills}</div>
            <div className="w-1/3  ">{elements.project_coordinator}</div>
            <div className="w-1/6">{elements.client}</div>
            <div className="w-1/6 ">{elements.agency}</div>
            <div className="w-1/6 ">{elements.project_end_date}</div>
            <div className="w-1/5 ">
              {elements.status === "pending" ? (
                <div className="flex justify-center  p-4 bg-red-400 text-sm  rounded-full">
                  Pending
                </div>
              ) : elements.status === "in progress" ? (
                <div className="flex justify-center  p-4 bg-yellow-400 text-sm rounded-full ">
                  In progress
                </div>
              ) : (
                <div className="flex justify-center  p-4 bg-green-400 text-sm rounded-full ">
                  Finished
                </div>
              )}
            </div>
            <div
              className="grid border-2 drop-shadow-xl cursor-pointer rounded-full h-10 w-20 mx-4 place-content-center hover:bg-red-600 hover:text-white hover:border-4 text-red-700 text-bold "
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
