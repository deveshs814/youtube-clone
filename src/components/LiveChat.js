import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, Box, Button, TextField, useTheme } from "@mui/material";
import { Scrollbar } from "react-scrollbars-custom";
import { generateRandomCompliment, generateRandomId, generateRandomName } from '../utils/helper';
import { addmessage } from '../utils/chatSlice';
import ChatMessageCard from './Chatcard';
import mypic from '../utils/icon.jpg';

const LiveChat = () => {

    const dispatch =useDispatch();
    const chatmessage = useSelector((store)=>store.chat.messages);
    const theme = useTheme();

    const [userMessage, setuserMessage] = useState("");

    useEffect(()=>{
     
        const intervalId = setInterval(()=>{
          const newmessage={
            id: generateRandomId(5),
            name: generateRandomName(),
            message: generateRandomCompliment()
          };
          dispatch(addmessage(newmessage));

        },2000)

        return ()=>clearInterval(intervalId);
        
      
    },[dispatch])

    const handleSendMessage= ()=>{
      const newmessage={
        id: generateRandomId(5),
        name: "Bikash Prasad",
        message:userMessage
      };
      dispatch(addmessage(newmessage));
      setuserMessage("")

    }

  return (
    <Box >
    <Scrollbar
      style={{
        boxSizing: "border-box",
        height: "80vh", // You can adjust the height based on your design
      }}
      thumbYProps={{
        style: {
          background: theme.palette.primary.main,
        },
      }}
      
    >
      <Box
       sx={{
       boxSizing: "border-box",
      overflowY: "scroll",
      display: "flex",
      flexDirection: "column-reverse", // Reverse the direction to show messages from bottom to top
      height: "80vh", // You can adjust the height based on your design
      }} >
        {chatmessage.map((message, i) => (
          <ChatMessageCard key={i} {...message} />
        ))}
      </Box>
    </Scrollbar>
    <Box
        sx={{
          display: "flex",
          alignItems: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "19rem",
          padding: "10px",
          backgroundColor: 'white' 
         
        }}
      >
        <Avatar alt="Avatar" src={mypic} />
        <TextField
          style={{ marginLeft: "10px",marginRight:"10px" }}
          label="Type your message"
          variant="outlined"
          fullWidth
          value={userMessage}
          onChange={(e) => setuserMessage(e.target.value)}
        />
        <Button variant="contained" color="primary"   onClick={handleSendMessage}>
          Send
        </Button>
        
      </Box>
  </Box>
  )
}

export default LiveChat