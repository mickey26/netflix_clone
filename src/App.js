import React from "react";
import "./App.css";
import LandingPage from "../src/components/LandingPage";
import Header from  "../src/components/Header";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers"



const store = createStore(reducers,{},applyMiddleware(thunk));

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <Header />
      </Provider>
    </div>
  );
}

export default App;
