import "./Header.css";

function Header() {
  return (
    <header className="header">
      <h1>SUPRIYA V</h1>
      { 
        <p>Frontend | Developer | React Learner</p>
       }

      <nav>
        <a href="#about">About</a>
        <a href="#skill">Skill</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

export default Header;
      
