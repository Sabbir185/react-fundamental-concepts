import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const idList = [185, 195, 197, 62, 192];
  const friends = [
    {name:'Sabbir', gf:'Madori'},
    {name: 'Nazib' , gf:'Dipika'},
    {name: 'Kutub' , gf:'Piyanka'},
    {name: 'Mahbub' , gf:'Bipasha'},
    {name: 'Khalid' , gf:'Alia_vat'}
  ];

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => setData(json));
  },[]);

  return (
    <div className="App">

      <Welcome></Welcome>

      {/* Heros component */}
      <section>
        <Heros name='Sabbir' id={idList[0]}> </Heros>
        <Heros name='Nazib' id={idList[1]}> </Heros>
        <Heros name='Manik' id={idList[2]}> </Heros>
        <Heros name='Kiron' id={idList[3]}> </Heros>
        <Heros name='Motiur' id={idList[4]}> </Heros>
      </section>

      {/* Personal component dynamic*/}
      <section>
         {
           friends.map( friend => <Personal name={friend.name} gf={friend.gf}></Personal>)
         }
      </section>

      {/* movie counter */}
      <section>
         <MovieCount></MovieCount>
      </section>


      {/* api dynamic data load */}
      <section>
        {
          data.map( arr => <NameList name={arr.name} id={arr.id} website={arr.website}></NameList>)
        }
      </section>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

    </div>
  );
}


function Welcome(){
  return (
    <div style={{border:'1px solid tomato',margin:'10px'}}>
      <h1>Welcome to React World !</h1>
      <h3>What is component ?</h3>
      <h5>Similar in look, different in data :)</h5>
    </div>
  );
}


function MovieCount(){
  const[count, setCount] = useState(3);
  // const increase = () => setCount(count + 1 );
  // const decrease = () => setCount(count - 1);
  return (
    <div>
      <button onClick={() => setCount(count+1)}>Add Movie</button>
      <button onClick={() => setCount(count-1)}>Remove Movie</button>
      <h3>Total movie added : {count}</h3>
    </div>
  );
}


function Heros(props){
  const style = {
    backgroundColor: 'lightgray',
    border: '1px solid yellow',
    borderRadius: '10px',
    height: '200px',
    width: '500px',
    margin: '10px auto',
    padding: '10px',
  }
  return (
    <div style={style}>
      <h2>Name of Hero : {props.name}</h2>
      <h3>ID of Heros : {props.id}</h3>
      <h4>University of NUBTK</h4>
      <h5>Section : 6A</h5>
    </div>
  );
}


function Personal(props){
  const style = {
    backgroundColor: 'lightgray',
    border: '2px solid tomato',
    borderRadius: '10px',
    height: '200px',
    margin: '10px auto',
    padding: '10px',
  }
  return (
    <div style={style}>
      <h2>Name : {props.name}</h2>
      <h3>gf name : {props.gf}</h3>
      <h4>University of NUBTK</h4>
      <h5>Section : 6A</h5>
    </div>
  );
}


// api calling using useEffect and useState
function NameList(props){
  const style = {
    backgroundColor: 'lightgray',
    border: '2px solid black',
    borderRadius: '10px',
    height: '200px',
    width: '500px',
    margin: '10px auto',
    padding: '10px',
  }
  return (
    <div style={style}>
      <h1>Data load from server (api calling)</h1>
      <h2>Name : {props.name}</h2>
      <h3>Website : {props.website}</h3>
      <h3>ID : {props.id}</h3>
    </div>
  );
}

export default App;
