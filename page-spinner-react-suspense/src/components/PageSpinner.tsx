import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function PageSpinner() {
  return (
    <Box sx={{ display: 'flex', width: '100%', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <CircularProgress size="5rem"/>
    </Box>
  );
}