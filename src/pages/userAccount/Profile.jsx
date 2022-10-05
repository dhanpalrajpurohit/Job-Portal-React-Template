import { Box } from '@mui/system';
import React from 'react'

import Header from '../../components/Header/header';

function Profile() {
  return (
    <div>
      <Box  >
        <img src='https://www.mockplus.com/images/blog-banner.png' sx={{width: 'inherit' ,height: '10vh'}}/>
      </Box>
      <Box  sx={{width: 100, height: 100,borderRadius: '100/ 2'}}>
      <img src='https://www.giantbomb.com/a/uploads/square_medium/16/164924/2345829-naruto_gokucostume.jpg' />
      </Box>
    </div>
  )
}
   
export default Profile
