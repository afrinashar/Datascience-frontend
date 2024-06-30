// src/App.js

import React, { useState, useEffect } from 'react';
import DataFetcher from './components/DataFetcher';
import DataProcessor from './components/DataProcessor';
import DataChart from './components/DataChart';
import DataAnalyzer from './components/DataAnalyzer';
import DataForm from './components/DataForm';
import { red } from '@mui/material/colors';

import {
  Container,
  Typography,
  Grid,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
} from '@mui/material';

function App() {
  const [rawData, setRawData] = useState([]);
  const [processedData, setProcessedData] = useState([]);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });
  const [analysisResults, setAnalysisResults] = useState({ mean: 0, median: 0, stddev: 0 });
  const [sortOrder, setSortOrder] = useState('asc');
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    if (processedData.length) {
      const labels = processedData.map(item => item.label);
      const data = processedData.map(item => item.value);

      setChartData({
        labels,
        datasets: [
          {
            label: 'Values',
            data,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      });
    }
  }, [processedData]);

  useEffect(() => {
    let filteredData = rawData;
    if (filterValue) {
      filteredData = rawData.filter(item =>
        item.label.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (sortOrder === 'asc') {
      filteredData = filteredData.sort((a, b) => a.value - b.value);
    } else {
      filteredData = filteredData.sort((a, b) => b.value - a.value);
    }
    setProcessedData(filteredData);
  }, [rawData, sortOrder, filterValue]);

  const handleAddData = (newData) => {
    setRawData(prevData => [...prevData, newData]);
  };
const color = red[500];

  return (
    <Container>
      <Typography variant="h2" component="h1" gutterBottom>
        Data Science with React
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <DataFetcher setData={setRawData} />
          <DataProcessor rawData={rawData} setProcessedData={setProcessedData} />
          <DataAnalyzer processedData={processedData} setAnalysisResults={setAnalysisResults} />
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
            <FormControl variant="outlined" style={{ minWidth: 120 }}>
              <InputLabel>Sort</InputLabel>
              <Select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)} label="Sort">
                <MenuItem value="asc">Ascending</MenuItem>
                <MenuItem value="desc">Descending</MenuItem>
              </Select>
            </FormControl>
            <TextField
              label="Filter"
              variant="outlined"
              value={filterValue}
              onChange={(e) => setFilterValue(e.target.value)}
            />
          </Box>
          <DataChart chartData={chartData} />
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" gutterBottom>
            Analysis Results
          </Typography>
          <Typography color>Mean: {analysisResults.mean}</Typography>
          <Typography>Median: {analysisResults.median}</Typography>
          <Typography>Standard Deviation: {analysisResults.stddev}</Typography>
        </Grid>
        <Grid item xs={12}>
          <DataForm onAddData={handleAddData} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
