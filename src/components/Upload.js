import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";
import { usePeerState, useReceivePeerState  } from 'react-peer';

function Upload(props) {
  const history = useNavigate();
  const [state, setState, brokerId, connections, error] = usePeerState(null, {brokerId: props.id});
  console.log(brokerId)


  const handleCapture = (event) => {
    console.log(event.target.files)
    setState({ 
      file: event.target.files[0],  
      name: event.target.files[0].name
    });

    history("/code",
        {
          state: {
              file: event.target.files[0],
              id: brokerId,
          }
        }
    );
  };

  return (
    <>
      <Button
        variant="contained"
        component="label"
        size="large"
        style={{backgroundColor: "#750808"}}
      >
        Upload File
        <input
          type="file"
          accept="*/*"
          hidden
          onChange={handleCapture}
        />
      </Button>
    </>
  );
}

export default Upload;
