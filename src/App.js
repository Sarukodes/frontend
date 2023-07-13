import 'bootstrap/dist/css/bootstrap.min.css'
import Province from './components/Province';
import Municipality from './components/Municipality';
import { BrowserRouter } from 'react-router-dom';



function App() {
  return (
    <div className="App">
    <Province/>
    <Municipality/>
    </div>
  );
}

export default App;
