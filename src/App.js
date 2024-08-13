import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import Table from './components/RewardTable';
import ErrorBoundary from './components/ErrorBoundary';
import './App.css';

const calculatePoints = (amount) => {
  const over100 = Math.max(amount - 100, 0);
  const between50And100 = Math.min(Math.max(amount - 50, 0), 50);
  return 2 * over100 + 1 * between50And100;
};

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate an API response
        const response = await new Promise((resolve) =>
          setTimeout(() => resolve([
            { customer: 'John Doe', month: 'January', amount: 120, points: calculatePoints(120) },
            { customer: 'Jane Smith', month: 'February', amount: 75, points: calculatePoints(75) },
            { customer: 'Alice Johnson', month: 'March', amount: 45, points: calculatePoints(45) }
          ]), 1000)
        );
        setData(response);
      } catch (e) {
        setError('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <ErrorBoundary>
      <div className="app">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Table data={data} />
      </div>
    </ErrorBoundary>
  );
};

export default App;
