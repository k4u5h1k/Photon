import './App.css';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Upload from './components/Upload';
import { Link } from "react-router-dom";
import { styled } from '@mui/material/styles';

function App() {

  function makeid(length) {
      var result           = '';
      var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      var charactersLength = characters.length;
      for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
   charactersLength));
     }
     return result;
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
          PHOTON
        </Typography>
        <Box sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px'
        }}>
          <Upload id={makeid(6)}/>
          <Button
            component={Link}
            to="/receive"
            variant="contained"
            size="large"
            style={{
              backgroundColor: "#750808",
            }}
          >
            Receive File
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
