import { useState, useEffect } from "react";

const useDataFetch = (apiUrl) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok.");
        }
        const jsonData = await response.json();
        setData(jsonData.results); // Update the state with fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [apiUrl]);

  return data;
};

export default useDataFetch;
