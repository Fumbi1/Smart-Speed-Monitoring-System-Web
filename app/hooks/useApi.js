"use client"
import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://192.168.43.252/';

// const useSystemState = () => {
//   const [isRunning, setIsRunning] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(BASE_URL + 'state');
//         setIsRunning(response.data.startsWith('Success'));
//       } catch (error) {
//         setError(error);
//       }
//     };

//     fetchData();
//   }, [isRunning]);

//   return { isRunning, error };
// };

export const useRecentTrespassers = (numberOfResults = 1) => {
  const [trespassers, setTrespassers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(BASE_URL + 'recent', {
          params: { number: numberOfResults },
        });
        setTrespassers(response.data);
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, [numberOfResults, trespassers]);

  return { trespassers, error };
};

export default {
  // useSystemState,
  useRecentTrespassers,
};
