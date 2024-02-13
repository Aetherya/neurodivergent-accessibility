import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';
import Goals from './pages/goals/goals';
import FurtherResearch from './pages/further-research/further-research';
import Components from './pages/component-library/components';
import Sources from './pages/sources/sources';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />

                <Route path="/goals" element={<Goals />} />
                <Route path="/components" element={<Components />} />

                <Route path="/further-research" element={<FurtherResearch />} />

                <Route path="/sources" element={<Sources />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
