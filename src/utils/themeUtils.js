export const colors = {
  white: "#ffffff",
  black: "#000000",
  grey: "#f5f5f7",
};

export const currencyFormatter = (amount) => {
  if (amount < 999) return amount;
  else if (amount < 99999) {
    return Math.floor(amount / 1000) + "," + (amount % 1000);
  } else if (amount < 9999999) {
    return (
      Math.floor(amount / 100000) + "," + currencyFormatter(amount % 100000)
    );
  }
};
