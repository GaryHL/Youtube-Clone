import { Stack, Box } from "@mui/material";
import VideoCard from "./VideoCard";
import ChannelCard from "./ChannelCard";

const Videos = ({ videos, direction }) => {

   if (!videos?.length) return 'Loading...';

   return (
      <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
         {videos.map((item, index) => (
            item.id.playlistId ?
               null
               : <Box key={index} sx={{width:{xs:'100%', md:'auto'}}} >
                  {item.id.videoId && <VideoCard video={item} />}
                  {item.id.channelId && <ChannelCard channelDetail={item} />}
               </Box>
         ))}
      </Stack>
   );
};

export default Videos;
