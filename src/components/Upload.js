import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { useNavigate } from "react-router-dom";

function Upload() {
  // const [selectedFile, setSelectedFile] = useState(null);
  const history = useNavigate();

  const handleCapture = (event) => {
    console.log(event.target.files)
    // setSelectedFile(event.target.files[0]);
    history("/code",
        {
          state: {
              file: event.target.files[0],
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
