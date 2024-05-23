import { useEffect, useState } from "react";



function useFetchData(url) {
    const [result, setResult] = useState([]);
    useEffect(()=> {
        async function fetchData() {
            try {
                const response = await fetch(url);
                const results = await response.json();
                setResult(results);
            } catch (error) {
                console.log(error);
                setResult([]);
            }
        }

        fetchData();
    }, [url])

    return result;
}

export default useFetchData;