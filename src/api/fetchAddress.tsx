export const fetchAddress = async (search: string) => {
  const response = await fetch(
    `https://cabonline-frontend-test.herokuapp.com/addresses?q=${search}`
  );
  return await response.json();
};
