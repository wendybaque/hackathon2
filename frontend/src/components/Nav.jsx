import logo from "../assets/apside_logo.png";
import profile from "../assets/profile.jpg";

import "./Nav.css";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-between m-8">
      <div className="flex">
        <img src={logo} alt="Apside" className="logo" />
        <div className="flex flex-col justify-center pl-8">
          <span className="text-cyan-900 text-lg">
            vendredi 1er Juillet 2022
          </span>
          <span className="text-cyan-900 text-lg"> 14:30</span>
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
