 import { calculatePoints } from '../utils/calculatePoints';
 
 // Simulate an API call
export const fetchTransactions = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
            { customer: 'John Doe', month: 'January',date: '2024-01-15', amount: 120,points: calculatePoints(120) },
            { customer: 'Jane Smith', month: 'February',date: '2024-02-25', amount: 75, points: calculatePoints(75) },
            { customer: 'Alice Johnson', month: 'March',date: '2024-03-05', amount: 45, points: calculatePoints(45) },
            { customer: 'Johnson', month: 'March',date: '2024-03-16', amount: 55, points: calculatePoints(55) },
            { customer: 'Johnson', month: 'March',date: '2024-03-16', amount: 105, points: calculatePoints(105) }
          // Add more transactions as needed
        ]);
      }, 1000);
    });
  };