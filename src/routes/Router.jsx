import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route exact path="/" element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/channel/:id" element={<ChannelDetail />} />
            <Route path="/search/:searchTerm" element={<SearchFeed />} />
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
