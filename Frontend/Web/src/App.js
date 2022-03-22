import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Einstellungen from './routes/Einstellungen';
import Wetten from './routes/Wetten';
import Ergebnisse from './routes/Ergebnisse';
import Kader from './routes/Kader';
import Tabelle from './routes/Tabelle';
import Authentication from './routes/Authentication'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} /> 
            <Route path="/tabelle" element={<Tabelle />} /> 
            <Route path="/kader" element={<Kader />} /> 
            <Route path="/ergebnisse" element={<Ergebnisse />} /> 
            <Route path="/wetten" element={<Wetten />} /> 
            <Route path="/einstellungen" element={<Einstellungen />} /> 
            <Route path="/auth" element={<Authentication />} /> 
        </Routes>
    </Router>
  );
}

export default App;
