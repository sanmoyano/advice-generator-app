import { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

const { Provider } = DataContext;

const DataProvider = ({ children }) => {
    const [textAdvice, setTextAdvice] = useState([]);

    const END_POINT = "	https://api.adviceslip.com/advice";

    const fetchData = async () => {
        const res = await fetch(END_POINT);
        const data = await res.json();

        setTextAdvice(data.slip); //cuando tengo un array de objetos, puedo usar el nombre del objeto para acceder a sus propiedades y pasarlos al state y llamarlas estado.propiedad
    };

    useEffect(() => {
        fetchData();
    }, []);

    const valueContext = {
        textAdvice,
        fetchData,
    };

    return <Provider value={valueContext}>{children}</Provider>;
};

export default DataProvider;
