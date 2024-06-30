// src/components/DataFetcher.js

import React, { useEffect } from 'react';
import axios from 'axios';

const DataFetcher = ({ setData }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/api/data');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [setData]);

  return null; // This component does not render anything
};

export default DataFetcher;
