import { Box } from "@mui/system";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from '../components/Navbar';
import Feed from '../views/Feed';
import VideoDetail from '../views/VideoDetail';
import ChannelDetail from '../views/ChannelDetail';
import SearchFeed from '../views/SearchFeed'

const Router = () => {
   return (
      <BrowserRouter>
         <Box sx={{ backgroundColor: '#000' }}>
            <Navbar />
            <Routes>
               <Route path="/" element={<Feed />} />
               <Route path="/video/:id" element={<VideoDetail />} />
               <Route path="/channel/:id" element={<ChannelDetail />} />
               <Route path="/search/:searchTerm" element={<SearchFeed />} />
            </Routes>
         </Box>
      </BrowserRouter>
   );
};

export default Router;
