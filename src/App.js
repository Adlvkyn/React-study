import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, Routes } from 'react-router-dom';

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div class="app-wrapper-content">
        <Routes>
          <Route path='/profile' element={<Profile state={props.state.profilePage} />} />
          <Route path='/dialogs' element={<Dialogs state={props.state.dialogsPage} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
