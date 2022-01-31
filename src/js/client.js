import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {GlobalProvider} from "./providers/GlobalProvider";
import Layout from "./parts/Layout";
import Top from "./pages/Top";
import Setting from "./pages/Setting";

const app = document.getElementById("app")
ReactDOM.render(
  <GlobalProvider>
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Top/>}></Route>
          <Route exact path="/setting" element={<Setting/>}></Route>
        </Routes>
      </Layout>
    </Router>
  </GlobalProvider>
  , app
)