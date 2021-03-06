import React, { Component } from 'react'
import loadLanguage from "./slices/loadLanguage";
import AppRouter from "./routing";

export class App extends Component {
  render() {
    return <AppRouter/>
  }
}

App.initialize= (store, render) =>{
  const promise = [loadLanguage()]
  return Promise.all(promise).then(()=>{
    render();
  })
}

export default App;
