import React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const Videos = ({ info }) => {
  console.log(info);
  const { snippet,statistics } = info;

  return (
    // <Stack direction="row" flexWrap="wrap" justifyContent="start" gap={2}>
    //   <Paper elevation={3} sx={{ width: 200, padding: 2 }}>
    //     <Box>
    //       <img src={snippet.thumbnails.medium.url} alt="Video Thumbnail" style={{ width: '100%' }} />
    //     </Box>
    //     <Box>
    //       <Typography variant="h7">{snippet.title}</Typography>
          // <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          //     <Typography variant="h7">{statistics.likeCount/1000}K</Typography>
          //     <Typography variant="h7">{statistics.viewCount/1000}K</Typography>
          // </Box>

        
          
    //     </Box>
    //   </Paper>
    // </Stack>
    <Card sx={{ width: 250 ,height: 275 }}>
    <CardActionArea>
      <CardMedia
        component="img"
        height="140"
        image={snippet.thumbnails.medium.url}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h7" component="div">
        {snippet.title}
        
        </Typography>
        <Typography variant="body2" color="text.secondary"  >
        {statistics.likeCount/1000}K Likes <br/>
        {statistics.viewCount/1000}K Views
        
        </Typography>
        
      </CardContent>
    </CardActionArea>
  </Card>
  );
};

export default Videos;



