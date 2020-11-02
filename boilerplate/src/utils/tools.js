export const myFunction = () => {
  return "This is my function";
};

export const populateEmptyPrize = (arr, callback, key1, key2, key3) => {
  const current = [...arr];
  const nonEmptyPrizes = current.filter((obj) => !!obj[key1] || !!obj[key2]);
  callback([...nonEmptyPrizes, { [key1]: "", [key2]: "", [key3]: "" }]);
};
