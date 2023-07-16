import photo from './me.JPG';
import './App.css';
import List from './List';
import AnotherImage from './AnotherImage';

function App() {
  //function showAlert(){
   // alert("Clicked!")
  //}
  const showAlert = () => {
    alert("Clicked!")
  }
  return (
    <div className="centerr" >
        <img src={photo}  alt="me" width="300px" />
        <List />
        <AnotherImage/>
        <button onClick={showAlert}>Button</button>
    </div>
  );
}

export default App;
