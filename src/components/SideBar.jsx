import { Stack } from "@mui/system";
import React from "react";
import { categories } from "../utils/constants";


const SideBar = ({ selectedCategory, setSelectedCategory }) => {
   return (
      <Stack
         direction="row"
         sx={{
            overflowY: "auto",
            height: { sx: "auto", md: "95%" },
            flexDirection: { md: "column" },
         }}
      >
         {categories.map((category) => {
            return (
               <button
                  onClick={() => setSelectedCategory(category.name)}
                  key={category.name}
                  className="category-btn"
                  style={{
                     background:
                        category.name === selectedCategory && "#fc150c",
                     color: "white",
                  }}
               >
                  <span
                     style={{
                        color:
                           category.name === selectedCategory ? "white" : "red",
                        marginRight: "15px",
                     }}
                  >
                     {category.icon}
                  </span>
                  <span
                     style={{ opacity: category.name === selectedCategory ? '1' : '0.8' }}
                  >{category.name}</span>
               </button>
            );
         })}
      </Stack>
   );
};

export default SideBar;
