import { useState, useEffect } from "react";
import API_KEY from "./key";

const SEARCH_KEY = "325216cbe6fdd4ebb";

// Create a custom hook
const useGoogleSearch = (payload) => {
  const [data, setData] = useState(null);

  // Code will run whenever the search input is changed and getting the search results
  useEffect(() => {
    const fetchData = async () => {
      fetch(
        `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_KEY}&q=${payload}`
      )
        .then((response) => response.json()) // getting response & converting to JSON
        .then((result) => setData(result)); // use the getting result to set the data
    };

    // Execute the fetchData function
    fetchData();
  }, [payload]);
  return { data };
};

export default useGoogleSearch;
