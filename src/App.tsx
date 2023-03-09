import { inject } from '@vercel/analytics';
import Parse from 'parse';
import React from 'react';
import { StoryProvider } from './contexts/Story';
import { BrowsePage, LandingPage, StoryPage } from './components/pages';
import { Route,
   BrowserRouter as Router,
   Routes } from 'react-router-dom';

// initialize parse database
const PARSE_APPLICATION_ID = process.env.REACT_APP_PARSE_APPLICATION_ID as string;
const PARSE_HOST_URL = process.env.REACT_APP_PARSE_HOST_URL as string;
const PARSE_JAVASCRIPT_KEY = process.env.REACT_APP_PARSE_JAVASCRIPT_KEY as string;
Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
Parse.serverURL = PARSE_HOST_URL;

inject(); // Enable Vercel Analytics

function App() {
   return (
      <StoryProvider>
         <Router>
            <Routes>
               <Route path='/' element={<LandingPage/>}/>
               <Route path='/browse' element={<BrowsePage/>}/>
               <Route path='/story/:storyId' element={<StoryPage/>}/>
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