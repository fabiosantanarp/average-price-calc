import React  from 'react';

import {Router} from './routes';
import MediumPriceProvider from '../src/contexts/MediumPriceContext/index'

function App() {
  return (
    <MediumPriceProvider>
      <Router/>
    </MediumPriceProvider>
  );
}

export default App;
