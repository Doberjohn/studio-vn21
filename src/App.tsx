import { NavigationBar } from './components/UI/molecules';
import Parse from 'parse';
import React from 'react';
import ReactGA from 'react-ga4';
import { StoryProvider } from './contexts/Story';
import { HomePage, ReaderPage } from './components/pages';
import { Route,
   BrowserRouter as Router,
   Routes } from 'react-router-dom';
import './App.css';

const PARSE_APPLICATION_ID = '28MROMpvLMLK7ZqZkAb4SiYQxySdZ2jtXUxl7p0w';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '6ukF9YJa5Iw0qieyHTZF5XwZgJ13rn2y4LznBP6K';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactGA.initialize('G-28MLPHX55W');

function App() {
   return (
      <StoryProvider>
         <Router>
            <NavigationBar/>
            <Routes>
               <Route path='/' element={<HomePage/>}/>
               <Route path='/reader/:storyId' element={<ReaderPage/>}/>
            </Routes>
         </Router>
      </StoryProvider>
   );
}

export default App;
