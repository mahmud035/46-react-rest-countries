import './App.css';
import AllCountry from './Components/AllCountry/AllCountry';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <AllCountry></AllCountry>
    </div>
  );
}

export default App;
