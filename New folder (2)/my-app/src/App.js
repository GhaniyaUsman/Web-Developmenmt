import './App.css';
import Firstcomponent from './components/first/Firstcomponent';
import Secondcomponent from './components/second/Secondcomponent';

let  a= "my name is ghaniya usman";

function App() {

  function handleClick(x){
    {console.log('Button is pressed')}
  }

  return (
   <div className="App">
      Ghaniya Usman
      <Firstcomponent abc ={a} clik={handleClick}/>
      <Secondcomponent/>
    </div>
    
    
  ); 
}

export default App;

//css file will be imported everywhere in the program, class is advised to use in the react
//javascript is always used in curly brackets