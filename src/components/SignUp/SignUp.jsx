import React from 'react';
import { Box, Typography, TextField, Button, Container } from '@mui/material';
import HedaerLogoImg from "../../assets/login-header-img.svg"; // Logo import

const SignInSignUp = () => {
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          textAlign: 'center',
          bgcolor: 'white',
        }}
      >
        {/* Image */}
        <Box
          component="img"
          src={HedaerLogoImg} // Corrected here
          alt="Shopping Illustration"
          sx={{
            width: '100%',
            mb: 2,
            borderRadius: '8px',
          }}
        />

        {/* Heading */}
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
          Sign in or Sign up
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          Enter your phone number for a faster checkout, to track the status of your order and more.
        </Typography>

        {/* Input Field */}
        <TextField
          label="Mobile number"
          variant="outlined"
          fullWidth
          sx={{ mb: 3 }}
        />

        {/* Button */}
        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: '#2e97f0',
            '&:hover': { bgcolor: '#227dc7' },
            textTransform: 'none',
          }}
        >
          Continue to OTP
        </Button>
      </Box>
    </Container>
  );
};

export default SignInSignUp;
