import './App.css'
import Header from './components/Header/Header'
import './../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';


import {
  BrowserRouter,
 
  Route,

  Routes,
} from "react-router-dom";
import ContextProvider from './components/ContextProvider/ContextProvider';

import MainPart from "./components/MainPart/MainPart";
import Footer from './components/Footer/Footer.jsx';
import Listing from './components/Pages/Listing/Listing.jsx';
import Newsletter from './components/Newsletter/Newsletter.jsx';
import Features from './components/Features/Features.jsx';
import Nofound from './components/Pages/Nofound/Nofound.jsx';

function App() {

  return (
    <div>
      <ContextProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route exact={true} path="/" element={<MainPart></MainPart>}></Route>
            <Route eaxct={true} path="/listing" element={<Listing> </Listing>}></Route>
            <Route eaxct={true} path="*" element={<Nofound> </Nofound>}></Route>
            
          </Routes>
          <Newsletter></Newsletter>
          <Features></Features>
          <Footer></Footer>
        </BrowserRouter>
      </ContextProvider>

    </div>
  )
}

export default App
