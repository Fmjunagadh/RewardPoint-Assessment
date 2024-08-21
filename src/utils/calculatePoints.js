// This function calculates the points based on the amount spent by the customer.
export const calculatePoints = (amount) => {
    const over100 = Math.max(amount - 100, 0);
    const between50And100 = Math.min(Math.max(amount - 50, 0), 50);
    return 2 * over100 + 1 * between50And100;
  };