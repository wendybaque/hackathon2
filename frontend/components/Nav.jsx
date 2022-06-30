import logo from "../assets/apside_logo.png";

export default function Navbar() {
  return (
    <div className="flex flex-row">
      <img src={logo} alt="logo Apside" />
      <span>vendredi 1er Juillet 2022</span>
      <span> 14:30</span>
    </div>
  );
}
