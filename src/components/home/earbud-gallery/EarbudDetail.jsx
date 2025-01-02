import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectSelectedEarbud, setSelectedEarbud } from "../../../features/productSlice";

const EarbudDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const product = useSelector(selectSelectedEarbud);

  React.useEffect(() => {
    dispatch(setSelectedEarbud(parseInt(id)));
  }, [dispatch, id]);

  if (!product) {
    return <Typography>Product not found.</Typography>;
  }

  const handleAddToCart = () => {
    navigate("/checkout", { state: { product } });
  };

  return (
    <Box className="min-h-screen bg-gray-50">
      <Box className="container mx-auto px-4 py-8">
        <Box className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-xl shadow-lg">
          <Box className="space-y-4 flex justify-center items-center">
            <Box
              className="relative w-full h-full bg-gray-100 rounded-xl overflow-hidden border border-gray-300 shadow-xl p-6 flex justify-center items-center"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-[60%] h-auto object-contain hover:scale-105"
                style={{
                  transition: "transform 0.3s ease",
                }}
              />
            </Box>
          </Box>
          <Box className="space-y-6">
            <Typography variant="h4" className="font-bold text-gray-800">
              {product.title}
            </Typography>
            <Box className="flex items-center gap-2 text-yellow-500">
              <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
              <Typography className="font-semibold">{product.rating}</Typography>
              <Typography className="text-sm ml-2 text-gray-500">
                {product.reviews} Reviews
              </Typography>
            </Box>
            <Box>
              <Typography variant="h5" className="text-gray-800 font-semibold">
                Rs {product.currentPrice}
              </Typography>
              <Typography className="text-gray-500 line-through">
                Rs {product.originalPrice}
              </Typography>
            </Box>
            <Typography className="text-gray-600">
              Discount: {product.discountPercentage}% off
            </Typography>
            <Button
              variant="contained"
              onClick={handleAddToCart}
              className="!bg-orange-500 !hover:bg-orange-600 !text-white"
              style={{ width: "200px", borderRadius: "30px" }}
            >
              Add to Cart
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EarbudDetail;
