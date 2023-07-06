import Navigation from "../Navigation/Navigation";
import style from "./Header.module.css";
// import Logo from "../../images/Logo.png";
import Logo from "../../images/icons/Logo";

function Header(props) {
  return (
    <header className={style.header}>
      <div className="div">
        {/* <img src={Logo} alt="Logo" /> */}
        <Logo />
      </div>
      <Navigation />
      <div>
        <img src="https://i.redd.it/8sqzvsj05l491.jpg" alt="avatar" />
      </div>
    </header>
  );
}
export default Header;
// 80 строк кода в одном файле
// Props - arguments
