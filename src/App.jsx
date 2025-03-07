import './index.css'
import './App.css'
import MainSection from './MainSection'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './Redux/index.js';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const currentHost = window.location.host;
    if (currentHost === "esds.co.in") {
      const newURL = `https://www.${currentHost}${window.location.pathname}${window.location.search}`;
      window.location.replace(newURL); // Redirect to the www version
    }
  }, []);

  return (
    <Provider store={store}>
     <BrowserRouter>
      <MainSection />
      </BrowserRouter>
      </Provider>
   
  )
}

export default App
