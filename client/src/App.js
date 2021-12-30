import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import loadLanguage from "./slices/loadLanguage";
import React, { Component } from 'react'

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
      </div>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//     {loadLanguage()}
//       <Navbar />
//     </div>
//   );
// }

export default App;
