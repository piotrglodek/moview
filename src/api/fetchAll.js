export const fetchAll = async (name, url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
