import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './mainpage'
import Blank from './blank';
import Components from './components';
import Friends from './friends';
import Groups from './groups';
import MarcketPlace from './marketplace';
import Messages from './messages';
import Modal from './modal';
import NewsFeed2 from './newsfeed-2';
import Profile from './profile';
import Settings from './settings';
import SignIn from './sign-in';
import SignUp from './sign-up';
// import Widgets from './widgets';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path='/' element={<MainPage />} />
      <Route path='/blanck' element={<Blank />} />
      <Route path='/components' element={<Components />} />
      <Route path='/friends' element={<Friends />} />
      <Route path='/groups' element={<Groups />} />
      <Route path='/marcketplace' element={<MarcketPlace />} />
      <Route path='/messages' element={<Messages />} />
      <Route path='/modal' element={<Modal />} />
      <Route path='/newsfeed-2' element={<NewsFeed2 />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-up' element={<SignUp />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
