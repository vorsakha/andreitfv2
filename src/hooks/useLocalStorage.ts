const useLocalStorage = () => {
  const setItem = (key: string, value: unknown) =>
    localStorage.setItem(key, JSON.stringify(value));
  const getItem = (key: string) => {
    const item = localStorage.getItem(key);

    if (item) return JSON.parse(item);

    return;
  };
  const removeItem = (key: string) => localStorage.removeItem(key);
  const clear = () => localStorage.clear();

  return { setItem, getItem, removeItem, clear };
};

export default useLocalStorage;
