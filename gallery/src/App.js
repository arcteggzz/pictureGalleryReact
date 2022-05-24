import './App.css';
import Screen from './Components/Screen';
import Gallery from './Components/Gallery';
import { useState} from "react"

function App() {
  const [displayPicture, setDisplayPicture] = useState("")

  return (
    <div className="App">
      <Gallery setDisplayPicture={setDisplayPicture}/>
      <Screen displayPicture={displayPicture}/>
      
    </div>
  );
}

export default App;
