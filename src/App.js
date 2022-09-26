import React from 'react';
import { useSelector } from 'react-redux';
import EnglishApp from './pages/EnglishApp/EnglishApp';
import Auth from './components/Auth/Auth';
import './App.css';

function App() {

  const isLogin = useSelector(state => state.registrationReducer.isLogin);

  return (
    <>
      {isLogin ? <EnglishApp/> : <Auth/>}
    </>
  );
}

export default App;
