// src/components/DataProcessor.js

import React, { useEffect } from 'react';
import * as d3 from 'd3';

const DataProcessor = ({ rawData, setProcessedData }) => {
  useEffect(() => {
    const processData = () => {
      const processedData = rawData.filter(item => item.value !== null);
      setProcessedData(processedData);
    };

    if (rawData.length) {
      processData();
    }
  }, [rawData, setProcessedData]);

  return null; // This component does not render anything
};

export default DataProcessor;
