// import logo from './logo.svg';
// import './App.css';

import './style/index.scss'
import Header from "./components/Header";
import Education from "./components/Education";
import AboutMe from "./components/AboutMe";

function App() {
  return (
    <main className="container">
      <Header />
      <AboutMe />
      <Education />
    </main>
  );
}

export default App;
