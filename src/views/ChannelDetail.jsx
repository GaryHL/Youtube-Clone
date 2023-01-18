import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/system";

import Videos from "../components/Videos";
import ChannelCard from "../components/ChannelCard";
import { fetchApiVideos } from "../utils/fetchApi";

const ChannelDetail = () => {
   const { id } = useParams();
   const [channelDetail, setChannelDetail] = useState(null);
   const [videos, setVideos] = useState([]);

   useEffect(() => {
      fetchApiVideos(`channels?part="snippet&id=${id}`).then((data) =>
         setChannelDetail(data?.items[0])
      );

      fetchApiVideos(`search?channelId=${id}&part=snippet&order=date`).then(
         (data) => setVideos(data?.items)
      );
   }, [id]);
   console.log('videos', videos)

   return (
      <Box minHeight="95vh">
         <Box>
            <div
               style={{
                  background: `linear-gradient(43deg, rgba(53,1,113,1) 0%, rgba(171,37,37,1) 100%)`,
                  zIndex: 10,
                  height: "250px",
               }}
            ></div>
            <ChannelCard channelDetail={channelDetail} marginTop={"-110px"} />
         </Box>
         <Box display='flex' p="2">
          <Box sx={{mr:{sm:'100px'}}}/>
            <Videos videos={videos}></Videos>
         </Box>
      </Box>
   );
};

export default ChannelDetail;
