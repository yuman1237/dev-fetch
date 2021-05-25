import Navigation from "./components/Navigation";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Content from "./components/Content";
import "./App.scss";
import { useState } from "react";
function App() {
  const [mobileMenu, setmobileMenu] = useState(false);
  const toggle = () => {
    setmobileMenu(!mobileMenu);
  };
  return (
    <>
      <Navigation openMenu={toggle} />

      <main className="main-container">
        <LeftSidebar burgerMenu={mobileMenu} closeMenu={toggle} />
        <Content />
        <RightSidebar />
      </main>
    </>
  );
}

export default App;
