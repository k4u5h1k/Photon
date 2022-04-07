import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';

const LoginTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: '#750808',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#750808',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'black',
    },
    '&:hover fieldset': {
      borderColor: 'black',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#750808',
    },
  },
});

function Receive() {
  // const [selectedFile, setSelectedFile] = useState(null);
  const [code, setCode] = useState("")
  const [file, setFile] = useState(null)
  const history = useNavigate();

  var handleChange = (evt) => {
      setCode(evt.target.value)
  }

  var checkEnter = (evt) => {
      if (evt.key === 'Enter'){
        evt.preventDefault()
        fetch('http://172.17.122.174:5000/recieve?' + new URLSearchParams({
              code: code,
        })).then(response => response.blob())
        .then(blob => {
          var file = window.URL.createObjectURL(blob);
          window.location.assign(file);
        });
      }
  }

  return (
    <Box sx={{
          marginTop: '30vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
    }}>
      <Typography 
        component="h1" 
        variant="h1"
        style={{
          marginBottom: '5vh',
          color: '#750808',
        }}
      >
        Enter Your Code
      </Typography>
      <LoginTextField
        margin="normal"
        required
        name="code"
        type="code"
        id="code"
        style={{width: '40%'}}
        onKeyUp={checkEnter}
        onChange={handleChange}
      />
    </Box>
  )
}

export default Receive;
