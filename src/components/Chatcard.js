import React from "react";
import {Typography, Box } from "@mui/material";
import { FaUserCircle } from "react-icons/fa";

const ChatMessageCard = ({ name, message }) => {
  return (
    <Box display="flex" alignItems="center" p={2} gap={2}>
      <FaUserCircle className="text-2xl" />

      <Typography variant="subtitle1" fontWeight="medium">
        {name}
      </Typography>

      <Typography variant="body2" className="break-all">
        {message}
      </Typography>
    </Box>
  );
};

export default ChatMessageCard;
