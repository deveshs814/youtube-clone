import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Paper,IconButton } from '@mui/material'
import { Search } from '@mui/icons-material'
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import MicOffIcon from '@mui/icons-material/MicOff';
import SpeechRecognition, {useSpeechRecognition} from "react-speech-recognition";


// import { YOUTUBE_SUGGESTION_API } from '../utils/constants'
const SearchBar = () => {
  const [searchQuery, setsearchQuery] = useState("");
  const [voiceAssistant, setvoiceAssistant] = useState(true);
 
  const navigate =useNavigate();
  
  const startListening = ()=>{
    if(!voiceAssistant){
      SpeechRecognition.stopListening();
    } else{
      resetTranscript();
      SpeechRecognition.startListening({
        continuous: true,
        language: "en-IN",
      });
  }
  };
  const { transcript, resetTranscript } =useSpeechRecognition();

  const changeurlhandler = ()=>{
    navigate("/search?s="+searchQuery);
    setvoiceAssistant(true);
    resetTranscript();
    SpeechRecognition.stopListening();
  }

  useEffect(()=>{
    setsearchQuery(transcript);
    const t1= setTimeout(()=>{
      SpeechRecognition.stopListening();
      setvoiceAssistant(true);
    },5000);

    return () => clearTimeout(t1);
  },[transcript]);
  
  

  return (
   <Paper
   

   sx={{
    borderRadius:20,
   border:'1px solid #e3e3e3',
   pl:2,
   boxShadow:'none',
   mr:{sm:5}
   }}
   >
   
   <input className='search-bar' placeholder='Search...' value={searchQuery} type="text"
   onChange={(e)=>setsearchQuery(e.target.value)}  
   onKeyUp={(e) => {
    if (e.key === 'Enter') {
      changeurlhandler();
    }
  }}
/>
   <IconButton onClick={changeurlhandler}  sx={{ p:'10px',color:'red'}}>
    <Search/>
   </IconButton>
   <IconButton 
    onClick={()=>{
    startListening();
    setvoiceAssistant(!voiceAssistant);
    }}  
    sx={{ p:'10px',color:'red'}}>
   { voiceAssistant ? (
      <KeyboardVoiceIcon/>
      ):(
      <MicOffIcon/>)}
   </IconButton>
   </Paper>
  )
}

export default SearchBar