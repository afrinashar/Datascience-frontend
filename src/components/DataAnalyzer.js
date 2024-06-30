// src/components/DataAnalyzer.js

import React, { useEffect } from 'react';
import * as ss from 'simple-statistics';

const DataAnalyzer = ({ processedData, setAnalysisResults }) => {
  useEffect(() => {
    const analyzeData = () => {
      const values = processedData.map(item => item.value);
      const mean = ss.mean(values);
      const median = ss.median(values);
      const stddev = ss.standardDeviation(values);

      setAnalysisResults({ mean, median, stddev });
    };

    if (processedData.length) {
      analyzeData();
    }
  }, [processedData, setAnalysisResults]);

  return null; // This component does not render anything
};

export default DataAnalyzer;
