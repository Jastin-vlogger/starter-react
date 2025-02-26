import { createRoot } from 'react-dom/client';
import { Header } from './components/header/header';
import React from 'react';
const root = createRoot(document.getElementById('root')!);
root.render(<Header />)