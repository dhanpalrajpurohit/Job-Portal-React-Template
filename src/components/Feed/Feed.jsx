import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material';

// import SideBar from '../Sidebar/Sidebar';
// import Videos from '../Videos/Videos';
import { SideBar, Videos } from '../index';
import { fetchFromAPI } from '../../utils/fetchFromAPI';

function Feed() {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [video, setVideos] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`searcb?lart=snippet&q=${selectedCategory}`);
  },[selectedCategory]);

  
  return (
    <Stack sx={{
      flexDirection: {
        sx:
          "column", md: "row"
      }
    }}>
      <Box sx={{
        height: {
          sx: 'auto', md: '92vh'
        }, borderRight: '1px solid #3d3d3d', px: { sx: 0, md: 2 }
      }}>
        <SideBar 
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography className="copyright" varient="body2" sx={{ mt: 1.5, color: '#fff' }}>
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2}}>
        <Typography varient="h4" fontWeight="bold" mb={2} sx={{
          color: 'white'
        }}>
          {selectedCategory }
          <span
            style={{ color: '#f31503' }}
          > Videos</span>
        </Typography>
      </Box>
      <Videos />
    </Stack>
  )
}

export default Feed
