/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import json from "../data/fakedata";
import logo from "../assets/apside_logo.png";

function MyProjects() {
  const [list, setList] = useState(json);
  const deleteProject = (id) => {
    setList(list.filter((elements) => elements.id !== id));
  };
  return (
    <div className="mx-4 bg-white">
      <header className="flex flex-row items-center">
        <img className="w-1/6 my-4" src={logo} alt="Apside logo" />
        <h1 className="text-center mx-10 text-3xl text-orange-400 font-bold">
          My Projects
        </h1>
      </header>
      <div className="flex flex-row border-2 border-black h-16">
        <select className="w-1/6 flex items-center bg-white ml-10 ">
          <option>PROJET</option>
          {list.map((elem) => {
            return <option value="">{elem.nom}</option>;
          })}
        </select>
        <div className="w-2/5 flex items-center mr-10 ">DESCRIPTION</div>
        <select className="w-1/6 flex items-center bg-white  ml-10 ">
          <option>TECH</option>
          {list.map((elem) => {
            return <option value="">{elem.tech}</option>;
          })}
        </select>
        <select className="w-1/6 flex items-center bg-white  ml-10 ">
          <option>AGENCE</option>
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
      {list.map((elements) => {
        return (
          <div className="flex flex-row border-2 hover:bg-slate-200 border-gray-200 py-4">
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
              className="grid border-2 drop-shadow-xl cursor-pointer rounded-full h-10 w-20 mx-4 place-content-center hover:bg-red-600 hover:text-white hover:border-4 text-red-700 font-bold"
              type="button"
              onClick={() => deleteProject(elements.id)}
            >
              X
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default MyProjects;
