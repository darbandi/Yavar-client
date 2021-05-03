const store = () => {
  const set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };
  const get = (name) => {
    const data = localStorage.getItem(name);
    return JSON.parse(data);
  };
  const remove = (name) => {
    localStorage.removeItem(name);
  };
  return { get, set, remove };
};

export default store;
