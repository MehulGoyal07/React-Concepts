import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});
    // We can directly directly use fetch function but we will use useEffect hook to make
    // sure that api call occurs only when it's required
    // Most of the api calls returns string which needs to be converted to json and then
    // convert it into 
    useEffect(() => {
        fetch(
                `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/
              latest/currencies/${currency}.json`
            ).then((res) => res.json)
            .then((res) => setData(res[currency]));
    }, [currency]);
    return data;
}

export default useCurrencyInfo;