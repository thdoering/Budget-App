import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import NetWorthCard from './components/NetWorthCard';
import CategoryBreakdown from './components/CategoryBreakdown';
import TransactionList from './components/TransactionList';
window.global = window;


const App = () => (
  <div style={{ padding: '1rem', fontFamily: 'sans-serif' }}>
    <Header />
    <NetWorthCard />
    <CategoryBreakdown />
    <TransactionList />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
