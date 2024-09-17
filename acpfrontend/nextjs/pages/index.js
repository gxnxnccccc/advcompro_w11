import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import Grid from "@mui/material/Grid2";
import { Box, Typography, Button, TextField } from "@mui/material"; // Use by LoginForm
import useBearStore from "@/store/useBearStore";
import { useState } from 'react';

function Home() {
  const [inputText, setInputText] = useState('');
  const [displayText, setDisplayText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(inputText);
  };

  return (
    <>
      <main>
        <Box textAlign='center' p={4} sx={{ bgcolor: '#89CFF0' }}>
          <Typography variant='h4' gutterBottom>
            Index
          </Typography>
            <Grid container spacing={0.5}>
              <Grid size={{ xs: 6, md: 4 }}>
                <Button variant='contained' color='primary' href='/page1'>
                  Back to Page 1
                </Button>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Button variant='contained' color='primary' href='/page3'>
                  Back to Page 2
                </Button>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Button variant='contained' color='primary' href='/page3'>
                  Back to Page 3
                </Button>
              </Grid>
              <Grid size={{ xs: 6, md: 4 }}>
                <Button variant='contained' color='primary' href='/'>
                  HOME
                </Button>
              </Grid>
            </Grid>
            {/* <TextField id='filled-basic' label='search' variant='filled' /> */}

            <Grid item xs={12} md={12}>
              <TextField
                id='filled-basic'
                label='Search'
                variant='filled'
                value={inputText} // Bind inputText to TextField value
                onChange={handleInputChange} // Handle input change
                />
            </Grid>

            <Grid item xs={12} md={12}>
              <Button variant='contained' color='primary' onClick={handleClick}>
                Click
              </Button>
            </Grid>

            {/* Display the text below */}
            {displayText && (
              <Grid item xs={12} md={12}>
                <Typography variant='h6' gutterBottom>
                  You typed: {displayText}
                </Typography>
              </Grid>
            )}
        </Box>
      </main>
    </>
  );
}

export default Home;



{/* <Button variant="outlined">GAMEMUI</Button> */}