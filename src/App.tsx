import React from 'react';
import './App.scss';
import Balance from './components/balance/Balance';
import Chart from './components/chart/Chart';

function App() {
  return (
    <div className="app">
      <Balance />
      <Chart />
    </div>
  );
}

export default App;
