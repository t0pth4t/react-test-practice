import './App.css';
import Test from './Test';

function App() {
  return (
    <div className="App">
      <Test data={{"Germany":"Berlin", "United States": "Washington D.C.", "Afghanistan":"Kabul","Brunei":"Bandar Seri Begawan"}}/>
    </div>
  );
}

export default App;
