import React from 'react';
import './Table.css';

const RewardTable = ({ data }) => (
  <div className="table-container">
    <table>
      <thead>
        <tr>
          <th>Customer</th>
          <th>Month</th>
          <th>Transaction Amount</th>
          <th>Points Earned</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.customer}</td>
            <td>{item.month}</td>
            <td>${item.amount}</td>
            <td>{item.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default RewardTable;
