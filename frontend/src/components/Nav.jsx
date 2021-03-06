import Clock from "react-digital-clock";

import logo from "../assets/apside_logo.png";
import profile from "../assets/profile.jpg";

import "./Nav.css";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between mx-8 py-4">
      <div className="flex">
        <img src={logo} alt="Apside" className="logo" />
        <div className="flex flex-col justify-center pl-8">
          <span className="text-cyan-900 text-lg">
            vendredi 1er Juillet 2022
          </span>
          <div className="bg-orange-400 rounded-md">
            <Clock />
          </div>
        </div>
      </div>
      <div className="flex pr-8">
        <div className="flex flex-col justify-center pr-8">
          <span className="text-cyan-900 text-lg">Bonjour John</span>
          <span className="text-cyan-900 text-lg">John@apside.com</span>
        </div>
        <img src={profile} alt="Apsider's" className="profile_picture" />
      </div>
    </div>
  );
}
