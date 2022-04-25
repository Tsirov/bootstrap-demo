import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';

import './App.css';
import Items from './components/Items/Items';
import Home from './components/Home/Home';

function App() {

    return (
        <main>
            <Routes>
               
                <Route path="/" element={ <Home /> } />
                <Route path="/activity" element={ <Home element={true}  /> } />
                <Route path='/items' element={  <Items /> } />
 
            </Routes>
        </main>

    );
}

export default App;
