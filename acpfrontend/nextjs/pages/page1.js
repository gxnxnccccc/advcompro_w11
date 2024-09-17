import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

export default function BasicBars() {
  return (
    <Box textAlign='center' p={4}>
      <Typography variant='h1' gutterBottom>
        Hello World, this is page 1.
      </Typography>
      <Button variant='contained' color='primary' href='/'>
        Back to Home
      </Button>
      <BarChart
      xAxis={[{ scaleType: 'band', data: ['Item Availability']}]}
      series={[{ data: [4] }, { data: [1] }, { data: [2] }, {data: [3] }]}
      width={600}
      height={300}
      />
    </Box>
  );
}
