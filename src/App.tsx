import { inject } from '@vercel/analytics';
import { NavigationBar } from './components/UI/molecules';
import Parse from 'parse';
import React from 'react';
import ReactGA from 'react-ga4';
import { StoryProvider } from './contexts/Story';
import { HomePage, ReaderPage } from './components/pages';
import { Route,
   BrowserRouter as Router,
   Routes } from 'react-router-dom';

const PARSE_APPLICATION_ID = '28MROMpvLMLK7ZqZkAb4SiYQxySdZ2jtXUxl7p0w';
const PARSE_HOST_URL = 'https://parseapi.back4app.com/';
const PARSE_JAVASCRIPT_KEY = '6ukF9YJa5Iw0qieyHTZF5XwZgJ13rn2y4LznBP6K';
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

ReactGA.initialize('G-28MLPHX55W');
inject();

function App() {
   return (
      <StoryProvider>
         <Router>
            <NavigationBar/>
            <Routes>
               <Route path='/' element={<HomePage/>}/>
               <Route path='/story/:storyId' element={<ReaderPage/>}/>
            </Routes>
         </Router>
      </StoryProvider>
   );
}

export default App;

//@todo in the future
// <iframe id='kofiframe'
//         src='https://ko-fi.com/studiovn21/?hidefeed=true&widget=true&embed=true&preview=true'
//         style={{
//            zIndex: 100,
//            width: 400,
//            height: 700,
//            borderRadius: 8,
//            position: 'fixed',
//            top: '50%',
//            left: '50%',
//            marginTop: '-350px',
//            marginLeft: '-250px',
//            background: '#f9f9f9' }} title='studiovn21'/>