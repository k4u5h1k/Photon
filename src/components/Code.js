import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Code() {
  const location = useLocation();
  const file = location.state.file
  const id = location.state.id

  return (
    <>
      <Box sx={{
            marginTop: '35vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
      }}>
        <Typography 
          component="h3" 
          variant="h3"
          style={{
            marginBottom: '5vh',
            color: '#750808',
          }}
        >
          You are sending: {file.name}
        </Typography>
        <Typography 
          component="h3" 
          variant="h4"
          style={{
            marginBottom: '5vh',
            color: '#750808',
          }}
        >
          Your Code is: {id}
        </Typography>
      </Box>
    </>
  )
}

export default Code;
