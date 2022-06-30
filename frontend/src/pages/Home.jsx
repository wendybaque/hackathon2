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
      <div className="flex flex-row border-4 border-blue-800">
        <div className="mx-8">
          <DailyNews />
        </div>
        <div className="w-full mx-8 max-h-96 overflow-hidden border-2 border-green-400">
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
