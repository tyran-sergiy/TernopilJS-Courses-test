export const getFewUniqueArr = (arrSize) => {

  /* get six random numbers, that will repeated in final array */
  const donorArr = Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000000));

  return Array.from({ length: arrSize }, () => donorArr[Math.floor(Math.random() * 6)]);
};
