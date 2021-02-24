import logo from './logo.svg';
import './App.css';

function App() {
  const idList = [185, 195, 197, 62, 192];
  const friends = [
    {name:'Sabbir', gf:'Madori'},
    {name: 'Nazib' , gf:'Dipika'},
    {name: 'Kutub' , gf:'Piyanka'},
    {name: 'Mahbub' , gf:'Bipasha'},
    {name: 'Khalid' , gf:'Alia_vat'}
  ]

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

export default App;
