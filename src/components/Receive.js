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
  const [code, setCode] = useState("")
  const history = useNavigate();


  // useEffect(function(){
  //   const [state, isConnected, error] = useReceivePeerState(code);
  //   console.log(state);
  // },[code])

  // var handleChange = (evt) => {
  //     setCode(evt.target.value)
  // }

  var checkEnter = (evt) => {
      if (evt.key === 'Enter'){
        evt.preventDefault()
        setCode(evt.target.value)

        history("/download",
            {
              state: {
                  code:evt.target.value
              }
            }
        );

        // fetch('http://172.17.122.174:5000/recieve?' + new URLSearchParams({
        //       code: code,
        // })).then(response => response.blob())
        // .then(blob => {
        //   var file = window.URL.createObjectURL(blob);
        //   window.location.assign(file);
        // });
      }
  }

  return (
    <>
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
      />
    </Box>
    </>
  )
}

export default Receive;
