import React from "react";
import Nav from "../components/Nav";
import json from "../data/fakeDataMySearch";

function Project() {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="flex grow-0 bg-orange-300 m-10 max-w-lg">
        <div className="bg-slate-100 m-10 text-xl p-2 space-y-1">
          <h1>nom: {json[0].project_title}</h1>
          <p>description: {json[0].project_description}</p>
          <h2>tech: {json[0].technologies_used}</h2>
          <p>autres compétences: {json[0].required_skills}</p>
          <p>référent projet: {json[0].project_coordinator}</p>
          <p>client : {json[0].client}</p>
          <h3>agence: {json[0].agency}</h3>
          <p>date de fin du projet: {json[0].project_end_date}</p>
          <p>statut : {json[0].status}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
