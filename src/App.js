import './styles.css';
import { motion } from 'framer-motion';

import NavMenu from './Components/NavMenu/NavMenu';
import TestBox from './Components/TestBox/TestBox';

export default function App() {
  return (
    <div className="App">
      <NavMenu />
      <TestBox />
    </div>
  );
}
