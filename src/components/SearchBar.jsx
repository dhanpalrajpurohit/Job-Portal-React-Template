import React from 'react'

import { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import {Paper, IconButton } from '@mui/material';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
function SearchBar() {
  return (
    <Paper
        component="form"
        onSubmit={()=>{}}
        sx={{
            borderRadius:20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr: {sm : 5}
        }}
    >
      <input 
        className='Search-bar'
        placeholder="Search.."
        value=""
        onChange={()=>{}}
        sx={{
          borderStyle:0 
        }
        }
        />
        <IconButton type="submit" sx={{
          p:'10px', color: 'red'}}>
            <YoutubeSearchedForIcon />
          </IconButton>
    </Paper>
  )
}

export default SearchBar
