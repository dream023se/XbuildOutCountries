import logo from './logo.svg';
import './App.css';
import { getCountryFlag } from './API/service';
import { useEffect } from 'react';
import { useState } from 'react';
import countries from './Component/countries/countries';

import Flags from './Component/Flags/Flags';

function App() {

const[flagData,setflagData]=useState([])

const getData = async()=>{
  const response= await getCountryFlag();
  setflagData(response)
}
useEffect(()=>{
  getData();
},[])
  return (
    <>
    <Flags data={flagData}/>
    </>
   
  );
}

export default App;
