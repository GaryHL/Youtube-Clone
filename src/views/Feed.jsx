import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import React, { useState, useEffect } from "react";
import SideBar from "../components/SideBar";
import Videos from "../components/Videos";
import { fetchApiVideos } from '../utils/fetchApi'
import Loader from "../components/loader/Loader";

const Feed = () => {

   const [selectedCategory, setSelectedCategory] = useState('Nuevos');
   const [videos, setVideos] = useState([]);


   useEffect(() => {
      fetchApiVideos(`search?part=snippet&q=${selectedCategory}`)
         .then((data) => setVideos(data.items))
   }, [selectedCategory])


   return (
      <>
      <Loader></Loader>
         <Stack sx={{ flexDirection: { sx: "column", md: "row" } }}>
            <Box
               sx={{
                  height: { sx: "auto", md: "92vh" },
                  borderRight: "1px solid #3d3d3d",
                  px: { sx: { sx: 0, md: 3 } },
               }}
            >
               <SideBar
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
               />
               <Typography
                  className="copyright"
                  variant="body2"
                  sx={{ mt: 1.5, color: "#fff", px:'1rem' }}
               >
                  Copyright 2023 GH
               </Typography>
            </Box>

            <Box p={2} sx={{ overflowY: "auto", height: "92vh", flex: 2 }}>
               <Typography
                  variant="h4"
                  fontWeight="bold"
                  mb={2}
                  sx={{ color: "white" }}
               >
                  {selectedCategory}
                  <span style={{ color: "#f31503"}}> Videos</span>
               </Typography>

               <Videos videos={videos} />
            </Box>
         </Stack>
      </>
   );
};

export default Feed;
