"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://192.168.43.252/';

export const useRecentTrespassers = (numberOfResults = 1) => {
  const [trespassers, setTrespassers] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL + 'recent', {
          params: { number: numberOfResults },
        });
        setTrespassers(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Error fetching trespassers:', error);
        setError(error);
      }
    };

    fetchData();
  }, [numberOfResults, trespassers]);

  return { trespassers, error };
};
