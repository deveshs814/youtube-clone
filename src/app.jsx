import React from "react";
import {BrowserRouter ,Routes, Route} from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";

import ChannelDetail from "./components/ChannelDetail";
import SearchFeed from "./components/SearchFeed";
import WatchPage from "./components/WatchPage";
import { Provider } from "react-redux";
import store from "./utils/Store";
const App =()=>{
    return (
        <BrowserRouter>
            <Provider store={store}>

            <Box sx={{background:"#000"}}>
                <Navbar/>

                <Routes>
                    <Route path="/" exact element ={<Feed/>} />
                    <Route path="/watch" element={<WatchPage/>} />
                    <Route path="/channel/:id" element={<ChannelDetail/>} />
                    <Route path="/search" element={<SearchFeed/>}  />

                </Routes>
            </Box>
        </Provider>
        </BrowserRouter>
    );  
}

export default App; 