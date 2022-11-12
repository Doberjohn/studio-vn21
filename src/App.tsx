import './App.css';
import React from 'react';
import {Div} from "./components/atoms";
import {HomePage} from "./pages";
import ReactGA from 'react-ga4';
import Parse from 'parse';

const PARSE_APPLICATION_ID = '28MROMpvLMLK7ZqZkAb4SiYQxySdZ2jtXUxl7p0w';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '6ukF9YJa5Iw0qieyHTZF5XwZgJ13rn2y4LznBP6K';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactGA.initialize("G-28MLPHX55W");

function App() {
   return (
      <Div>
         <HomePage/>
      </Div>
   );
}

export default App;
