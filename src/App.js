import { BrowserRouter, Routes, Route } from 'react-router-dom';

// pages
import Cars from './pages/Cars';
import Home from './pages/Home';
import Unknown from './pages/Unknown';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cars" element={<Cars />} />
                <Route path='/*' element={<Unknown />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
