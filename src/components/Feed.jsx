import React from 'react'
import { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { YOUTUBE_VIDEO_API } from '../utils/constants'
import { Link } from 'react-router-dom'

const Feed = () => {
  const [videos, setvideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);


  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      const json = await data.json();
      // console.log(json);
      setvideos(json.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  }
  return (
    <Stack sx={{flexDirection : {sx:"column" , md:"row"}}}>
      <Box sx={{height :{sx:'auto', md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar/>

        <Typography className='copyright' varient="body2" sx={{mt:1.5, color: '#fff'}}>
          Copyright 2023
        </Typography>
      </Box>
      {/* <Box p={2} sx={{overflowY:"auto", height:'90vh'}}>
        <Typography variant='h4' fontWeight="bold" mb={2}  sx={{color:"white"}}>
         New <span style={{color:'#F31503'}}>videos</span>
        </Typography>
       
      </Box> */}
      <Box p={2} sx={{overflowY: 'auto', height: '80vh', marginTop: 2, display:'flex',flexWrap:'wrap',gap: 2,marginLeft:5}}>
        {/* {videos.length > 0 && <Videos info={videos[0]} />} */}
        {videos.map((video) => (
          <Link key={video.id} to={"/watch?v="+video.id}><Videos info={video} /></Link>
        ))}
        
      </Box>



       
    </Stack>
   
  )
}

export default Feed