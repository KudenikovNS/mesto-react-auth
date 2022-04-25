import headerLogo from "../images/header_logo.svg"

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo hover"
        src={headerLogo}
        alt="Логотип"
      />
    </header>
  );
}

export default Header;

