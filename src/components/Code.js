import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Navigate } from 'react-router-dom';
import {useLocation} from 'react-router-dom';

function Code() {
  const location = useLocation();
  const [code, setCode] = useState(null);
  const file = location.state.file

  useEffect( () => {
    var data = new FormData()
    data.append('file', file)
    data.append('user', 'cosec')

    fetch('http://127.0.0.1:8081/upload', {
      method: 'POST',
      body: data
    }).then( 
      response => response.json() 
    ).then(
      success => setCode(success['code'])
    )
  }, [])

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
          Your Code is: {code}
        </Typography>
      </Box>
    </>
  )
}

export default Code;
