import React from 'react';
import { Container, Paper, Typography } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import Commentcontainer from './Commentcontainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [SearchParams] =useSearchParams();
  return (
    <Container maxWidth="md"  style={{ marginLeft: 0 }}>
      <Paper elevation={3} style={{ padding: 2 }}>
        <iframe
          width="100%"
          height="400"
          src={"https://www.youtube.com/embed/"+SearchParams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        <Typography variant="h5" style={{ marginTop: 15, marginBottom: 10 }}>
          Video Title
        </Typography>
        <Typography variant="body1" color="textSecondary">
          Views • Published Date
        </Typography>
        {/* You can add more information about the video, such as likes, dislikes, share, etc. */}
      </Paper>
      <Paper style={{ marginTop: '20px', padding: '15px' }}>
          <Typography color="black" className="comment-text">
            Comments
          </Typography>
          <Commentcontainer />
      </Paper>
      <Paper
      style={{
        position: 'fixed',
        top: '60px', // Assuming your Navbar is 64px in height; adjust as needed
        right: '20px',
        marginTop: '20px',
        padding: '15px',
        height: '455px', // Adjust the height as needed
        width: '19rem', // Adjust the width as needed
        
      }}
    >
      <LiveChat />
    </Paper>
    </Container>
  );
};

export default WatchPage;
