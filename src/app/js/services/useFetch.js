import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "../utils/Url";

const base_url = "https://fakestoreapi.com/";

export default function useFetch(url) {
  
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await axios.post(`${BASE_URL + url}`);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { data, error, loading };
}
