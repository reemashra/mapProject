import logo from './logo.svg';
import './App.css';
import cities from './utils/Cities';
import Select from 'react-select';
import React,{useState} from 'react';

function App() {
const [url,serUrl]=useState('')
  let preparedValues=[];
  preparedValues=cities.map((obj)=>{
    let selectObj={};
    selectObj.label=obj.city;
    selectObj.value=obj.image;
    return selectObj;
  });
  let handleImage=(obj)=>{
serUrl(obj.value);
  }
  return (
    <div className="App">
    
        <Select options={preparedValues} onChange={handleImage} />
        <div />
        <div />
        <br />
        <br />
        {url!==''?<img src={url} width='400' height='400' />:null}
    </div>
  );
}

export default App;
