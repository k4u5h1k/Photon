import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import {useLocation} from 'react-router-dom';
import { useReceivePeerState } from 'react-peer';

function Download() {
  const location = useLocation();
  const code = location.state.code
  const [state, isConnected, error] = useReceivePeerState(code);
  const [file, setFile] = useState(null);
  const [name, setName] = useState(null);

  useEffect(function(){
    console.log(state);
    
    if (typeof state !== 'undefined' && 'file' in state){
      setFile(state.file);
      setName(state.name);
      const blobObject = new Blob([state.file]);
      downloadFile(blobObject, state.name);
    }
  },[state])

  const downloadFile = (blobObject, fileName) => {
    const link = document.createElement("a");
    const href = window.URL.createObjectURL(blobObject);
    link.href = href;
    link.download = fileName;

    link.click();

    window.URL.revokeObjectURL(href);

    link.remove();

    return true;
  };

  return <>
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
            color: '#750808',
          }}
        >
          Please wait your file will be downloaded shortly...
        </Typography>
      </Box>
    </>
    </>
}

export default Download;
