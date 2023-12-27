// import React, { useEffect, useState } from 'react'
// import { Link, useSearchParams } from 'react-router-dom'

// import Sidebar from './Sidebar';
// import { Box, Stack, Typography } from '@mui/material';
// import VideoCard from './videoCard';

// const SearchFeed = () => {
//   const [query] = useSearchParams();
//   const searchQuery= query.get("s");
  
//   const [searchVideos, setsearchVideos] = useState([]);
//  const YOUR_API_KEY = "AIzaSyDGYgC4KDAWA4SF10PLc9hdZ0a9SnEh23Y";
  
//  useEffect(()=>{
//     getResults();

//   },[searchQuery])

//   const getResults= async ()=>{
//       const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUR_API_KEY}`)
//       const json = await data.json();
//       setsearchVideos(json.items);
//   }
//   console.log(searchVideos);
  

//   return (
//     <Stack sx={{flexDirection : {sx:"column" , md:"row"}}}>
//      <Box sx={{height :{sx:'auto', md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
//         <Sidebar/>

//         <Typography className='copyright' varient="body2" sx={{mt:1.5, color: '#fff'}}>
//           Copyright 2023
//         </Typography>
//       </Box>
//     <Box p={2} sx={{overflowY: 'auto', height: '80vh', marginTop: 2, display:'flex',flexWrap:'wrap',gap: 2,marginLeft:5}}>
//       {/* {searchVideos.length > 0 && <Videos info={searchVideos[0]} />} */}
//       {searchVideos.map((video) => (
//         <Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}><VideoCard info={video} /></Link>
//       ))}
      
//     </Box>



     
//   </Stack>
  
//   )
// }

// export default SearchFeed
import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

import Sidebar from './Sidebar';
import { Box, Stack, Typography } from '@mui/material';
import VideoCard from './videoCard';

const SearchFeed = () => {
  const [query] = useSearchParams();
  const searchQuery= query.get("s");
  console.log(searchQuery);
  const [searchVideos, setsearchVideos] = useState([]);
 const YOUR_API_KEY = "AIzaSyAIi8VgLmgWhKlLLLRkRAGWCco6Nj2nY_I";

//  n
  
useEffect(() => {
  const getResults = async () => {
    try {
      const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUR_API_KEY}`);
      const json = await data.json();
      setsearchVideos(json.items || []);
    } catch (error) {
      console.error('Error fetching search results:', error);
      setsearchVideos([]);
    }
  };

  getResults();
}, [searchQuery]);

  // const getResults= async ()=>{
  //     const data = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchQuery}&key=${YOUR_API_KEY}`)
  //     const json = await data.json();
  //     setsearchVideos(json.items);
  // }
  console.log(searchVideos);
  

  return (
    <Stack sx={{flexDirection : {sx:"column" , md:"row"}}}>
     <Box sx={{height :{sx:'auto', md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:2}}}>
        <Sidebar/>

        <Typography className='copyright' varient="body2" sx={{mt:1.5, color: '#fff'}}>
          Copyright 2023
        </Typography>
      </Box>
    <Box p={2} sx={{overflowY: 'auto', height: '80vh', marginTop: 2, display:'flex',flexWrap:'wrap',gap: 2,marginLeft:5}}>
      {/* {searchVideos.length > 0 && <Videos info={searchVideos[0]} />} */}
      {searchVideos.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v="+video.id.videoId}><VideoCard info={video} /></Link>
      ))}
      
    </Box>



     
  </Stack>
  
  )
}

export default SearchFeed