import { Box } from "@mui/material";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import SearchBar from "./SearchBar";

const Navbar = () => {
   return (
      <>
         <Stack
            direction="row"
            alignItems="center"
            p={2}
            sx={{
               position: "sticky",
               background: "#000",
               top: 0,
               justifyContent: "space-between",
            }}
         >
            <Link to="/" style={{ display: "flex", alignItems: "center" }}>
               <img
                  src="https://i.ibb.co/s9Qys2j/logo.png"
                  alt="logo"
                  height={45}
               />
            </Link>
            <SearchBar />
         </Stack>
      </>
   );
};

export default Navbar;
