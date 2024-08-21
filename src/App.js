import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './api/mockApi';
import { calculatePoints } from './utils/calculatePoints';
import Loader from './components/Loader';
import Table from './components/RewardTable';
import ErrorBoundary from './components/ErrorBoundary';

const App = () => {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchTransactions();
        setData(data);
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

  const calculateMonthlyPoints = (data) => {
    const pointsByCustomer = {};

    data.forEach(({ customer, amount, date }) => {
      const month = new Date(date).getMonth() + 1;
      const points = calculatePoints(amount);

      if (!pointsByCustomer[customer]) {
        pointsByCustomer[customer] = {};
      }

      if (!pointsByCustomer[customer][month]) {
        pointsByCustomer[customer][month] = 0;
      }

      pointsByCustomer[customer][month] += points;
    });

    return pointsByCustomer;
  };

  const pointsByCustomer = calculateMonthlyPoints(data);


  return (
    <ErrorBoundary>
      <div className="app">
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Table data={data} />
      </div>
      <div>
      <h3>Reward Points</h3>
      {Object.keys(pointsByCustomer).map((customer) => (
        <div key={customer}>
          <h2>{customer}</h2>
          {Object.keys(pointsByCustomer[customer]).map((month) => (
            <p key={month}>
              Month {month}: {pointsByCustomer[customer][month]} points
            </p>
          ))}
        </div>
      ))}
    </div>
    </ErrorBoundary>
  );
};

export default App;
