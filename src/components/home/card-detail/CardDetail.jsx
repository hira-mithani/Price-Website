import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import productData from "../../../components/data/Product.json";
import Footer from "../../footer/Footer";

const CardDetail = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { id } = useParams();
  const card = productData.find((item) => item.id === parseInt(id));

  if (!card) {
    return <Typography variant="h6">Card not found</Typography>;
  }

  return (
    <Box>
      <Box className="container mx-auto p-5">
        {/* Product Details */}
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Image Section */}
          <Box>
            <Box className="flex justify-center items-center border rounded-lg p-4">
              <img
                src={card.Image || "fallback_image.jpg"}
                alt={card.reviews}
                className="h-full w-full object-contain rounded-md"
              />
            </Box>
            <Box className="flex space-x-4 mt-4">
              {card?.details?.carouselImages?.map((image, index) => (
                <img
                  key={index}
                  src={image || "fallback_image.jpg"}
                  alt={`Carousel ${index + 1}`}
                  className="w-20 h-20 object-cover rounded-md border"
                />
              ))}
            </Box>
          </Box>

          {/* Text Section */}
          <Box>
            <Typography variant="h4" className="font-bold mb-2">
              {card.reviews}
            </Typography>
            <Box className="flex justify-between items-center my-2">
              <Box className="flex items-center bg-yellow-50 px-2 py-1 rounded-full">
                {/* Stars */}
                <Box className="flex text-yellow-500">
                  {"★".repeat(4)}
                  {"★".repeat(1).replace("★", "☆")}
                </Box>
                <Typography variant="body2" className="ml-2 text-xs text-black">
                  4.8
                </Typography>
                <Typography variant="body2" className="ml-1 text-xs text-gray-500">
                  | 538 Reviews
                </Typography>
              </Box>
              <img src={official} alt="Official" className="w-6" />
            </Box>

            <Box className="flex justify-between my-4">
              <Box>
                <Typography variant="body2" className="text-gray-500">
                  Priceoye Price
                </Typography>
                <Typography variant="h5" className="flex items-center">
                  Rs {card.price}
                  <Typography variant="body2" className="ml-2 line-through text-gray-500">
                    Rs {card.oldPrice}
                  </Typography>
                </Typography>
              </Box>
              <Typography variant="body2" className="text-green-500">
                {card?.percent || "No Discount"}
              </Typography>
            </Box>

            {/* Buttons */}
            <Box className="flex space-x-4">
              <Button variant="contained" className="bg-yellow-600">
                Add to Cart
              </Button>
              <Button variant="contained" className="bg-blue-600">
                Compare
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Accordion for Questions and Answers */}
      <Box className="my-4 bg-white">
        <Typography variant="h6" className="p-4">
          Questions and Answers
        </Typography>
        {card.details.questionsAndAnswers?.map((qa, index) => (
          <Accordion
            key={index}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{qa.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{qa.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default CardDetail;
