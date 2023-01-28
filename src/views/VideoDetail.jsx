import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { fetchApiVideos } from "../utils/fetchApi";
import { CheckCircle } from "@mui/icons-material";
import Videos from "../components/Videos";

const VideoDetail = () => {
   const [videos, setVideos] = useState(null);
   const [videoDetail,setVideoDetail] = useState()
   const { id } = useParams();

   useEffect(() => {
      fetchApiVideos(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]));
      console.log("videosdetail", videoDetail)
      
      fetchApiVideos(
         `search?part=snippet&relatedToVideoId=${id}&type=video`
      ).then((data) => setVideos(data.items));
    }, [id]);
    
    console.log("videosdetail", videoDetail) 
    // console.log("title ",videoDetail.snippet.channelId)
  //  console.log(videoDetail)
  // const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;


  //  if (!videoDetail?.snippet) return "loading";

   return (
      <Box minHeight="95vh">
         <Stack direction={{ xs: "column", md: "row" }}>
            <Box flex={1}>
               <Box sx={{ width: "100%", position: "sticky", top: "86px" }}>
                  <ReactPlayer
                     url={`https://www.youtube.com/watch?v=${id}`}
                     className="react-player"
                     controls
                  />
                  <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
                     {/* {videoDetail.snippet.title} */}
                     {videoDetail.snippet.title}
                  </Typography>
                  <Stack
                     direction="row"
                     justifyContent="space-between"
                     sx={{ color: "#fff" }}
                     py={1}
                     px={2}
                  >
                     <Link to={`/channel/${videoDetail.snippet.channelId}`}>
                        <Typography
                           variant={{
                              sm: "subtitle1",
                              md: "h6",
                           }}
                           color="#fff"
                        >
                           {videoDetail.snippet.channelTitle}
                           <CheckCircle
                              sx={{
                                 fontSize: "12px",
                                 color: "gray",
                                 ml: "5px",
                              }}
                           />
                        </Typography>
                     </Link>
                     <Stack direction="row" gap="20px" alignItems="center">
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {/* {parseInt(videoDetail.statistics.viewCount).toLocaleString()} views */}
                        </Typography>
                        <Typography variant="body1" sx={{ opacity: 0.7 }}>
                           {/* {parseInt(videoDetail.statistics.likeCount).toLocaleString()} views */}
                        </Typography>
                     </Stack>
                  </Stack>
               </Box>
            </Box>
            <Box
               px={2}
               py={{ md: 1, xs: 5 }}
               justifyContent="center"
               alignItems="center"
            >
               <Videos direction="column" videos={videos} />
            </Box>
         </Stack>
      </Box>
   );
};

export default VideoDetail;
