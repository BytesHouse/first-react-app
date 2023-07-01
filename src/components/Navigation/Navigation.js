const listItems = [
  "Home",
  "About us",
  "Contact us",
  "FAQ",
  "App",
  "Links",
  "some",
];

const listItemsObjects = [
  { text: "home", link: "https://google.com" },
  { text: "About Us", link: "https://facebook.com" },
  { text: "Contact Us", link: "https://instagram.com" },
  { text: "some text", link: "https://site.org" },
];

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="nav-list">
        {listItemsObjects.map((item) => (
          <li key={item}>
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navigation;
