import { Box, Button, Typography } from "@mui/material";
import React from "react";

const PriceSection = () => {
  return (
    <Box
      className="container mx-auto px-6 lg:px-16 pt-32" // Increased padding-top for even more space from top
    >
      {/* Top spacing */}
      <Box className="flex justify-between mx-5 my-5">
        <Typography variant="h6" className="font-bold">
          Shop by Price
        </Typography>
        <Button
          variant="outlined"
          className="!bg-white !text-black !font-bold border"
        >
          View All
        </Button>
      </Box>

      {/* Price Range Buttons */}
      <Box className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {[
          "Below RS 15000",
          "Rs, 15000- Rs 25000",
          "Rs 25000- Rs 40000",
          "Rs 40000- Rs 60000",
          "Rs 60000- Rs 80000",
          "Rs 80000- Rs 100000",
          "100000- 1500000",
          "Above Rs 1500000",
        ].map((priceRange, index) => (
          <Box key={index}>
            <Button
              variant="contained"
              className="w-full h-full !bg-yellow-300 !text-black relative overflow-hidden group"
            >
              <span className="absolute inset-0 bg-blue-400 scale-y-0 group-hover:scale-y-100 transform origin-bottom transition-transform duration-300 ease-in-out"></span>
              <span className="relative z-10">{priceRange}</span>
            </Button>
          </Box>
        ))}
      </Box>

      {/* Bottom Spacing */}
      <Box className="my-16"></Box> {/* Bottom margin */}
    </Box>
  );
};

export default PriceSection;
