import Navbar from "./components/Navbar";
import "./App.css";

const App = () => {
    return ( 
    <header>
      <div className = "nav-area">
        <a href = "/#" className = "logo" > dropdownExamples </a> 
        <Navbar />
      </div> 
    </header>
    );
};

export default App;
