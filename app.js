import { createRoot } from 'react-dom/client';
import { Header } from './components/header/header';

const root = createRoot(document.getElementById('root'));
root.render(<Header />)