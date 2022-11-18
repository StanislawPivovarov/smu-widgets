import React from 'react';
import StartScreen from './components/StartScreen';
import ContractSign from './components/ContractSign';
import SubscriptionWaiting from './components/SubscriptionWaiting';
import './App.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Pay from './components/Pay';
import Negative from './components/Negative/Negative';
import NegativeRented from './components/NegativeRented';
import SuccessfulBooking from './components/SuccessfulBooking';
import DDUForm from './components/DDUForm';
import DocCheck from './components/DocCheck';
import BuilderWaiting from './components/BuilderWaiting';
import Final from './components/Final';

function App() {
  return (
    <div className="App">
      
    <Router>
      <Routes>
        <Route path='/' element = {<StartScreen/>} />
        <Route path='/contract' element = {<ContractSign/>} />
        <Route path='/subscription' element ={<SubscriptionWaiting/>}/>
        <Route path='/pay' element ={<Pay/>}/>
        <Route path='/negative_declined' element={<Negative/>}/>
        <Route path='/negative_rented' element={<NegativeRented/>}/>
        <Route path='/booking' element={<SuccessfulBooking/>}/>
        <Route path='/dduorm' element={<DDUForm/>}/>
        <Route path='/doc_check' element={<DocCheck/>}/>
        <Route path='/waiting_builder' element={<BuilderWaiting/>}/>
        <Route path='/success' element={<Final/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
