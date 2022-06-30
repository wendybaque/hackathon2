import React from "react";
import Nav from "../components/Nav";
import MyProjects from "../components/MyProjects";
import DailyNews from "../components/DailyNews";
import MySearch from "../components/MySearch";
import AddButton from "../components/AddButton";

function Home() {
  return (
    <div className="bg-white">
      <div>
        <Nav />
      </div>
      <div className="flex flex-row justify-between">
        <div className="w-1/2 mx-8">
          <DailyNews />
        </div>
        <div className="flex items-center justify-center w-1/2 min-h-96 max-h-96">
          <MyProjects />
        </div>
      </div>
      <div className="mx-8">
        <MySearch />
      </div>
      <AddButton />
    </div>
  );
}
export default Home;
