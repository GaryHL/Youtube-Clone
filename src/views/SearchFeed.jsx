import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom'
import SideBar from "../components/SideBar";
import Videos from "../components/Videos";
import { fetchApiVideos } from "../utils/fetchApi";

const SearchFeed = () => {
   const [videos, setVideos] = useState([]);

   const {searchTerm} = useParams();
   useEffect(() => {
      fetchApiVideos(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items));
   }, [searchTerm]);

   return ( 
         <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
            <Typography
               variant="h4"
               fontWeight="bold"
               mb={2}
               sx={{ color: "white" }}
            >
               Search Results for: 
               <span style={{ color: "#f31503" }}> {searchTerm} Videos</span>
            </Typography>

            <Videos videos={videos} />
         </Box>
   );
   }
export default SearchFeed;
