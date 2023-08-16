/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async() => {
      setLoading(true);
      setError(null);
      let errors = false;

      try {
        const response = await fetch(url + opts);
        if (!response.ok) {
          errors = true
          setError(`статус ответа: ${response.status}`);
          throw new Error(response.statusText); 
        }
        try {
          const data = await response.json();
          setData(data)
        } catch (e) {
          setError('Ошибка парсинга JSON');
          console.error(e)
        }
      } catch (e) {
        console.log(e);
        if (!errors) setError('Ошибка загрузки')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

    return setData(null)

  }, [opts, url])

  return [{data, error, loading}]
}
