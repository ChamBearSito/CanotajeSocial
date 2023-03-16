const getDataFromLocalStorage = (name) => {
    return JSON.parse(localStorage.getItem(name)) ?? [];;
};
const setDatatoLocalStorage = (name,data) => {
    localStorage.setItem(name, JSON.stringify(data));
};

export { getDataFromLocalStorage, setDatatoLocalStorage}