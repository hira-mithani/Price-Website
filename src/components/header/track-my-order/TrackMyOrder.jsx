import React from "react";
import { Box, Typography, List, ListItem, ListItemText, Container } from "@mui/material";

function TrackMyOrder() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100vh", backgroundColor: "#f7f8fa" }}>
      {/* Header */}
      <Box sx={{ backgroundColor: "#2196F3", padding: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography variant="h6" sx={{ color: "white", fontWeight: "bold" }}>Priceoye</Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <input type="text" placeholder="Search..." style={{ padding: "0.5rem", borderRadius: "4px", border: "1px solid #ccc" }} />
          <Typography sx={{ color: "white" }}>Hira</Typography>
        </Box>
      </Box>

      {/* Sidebar and Content */}
      <Box sx={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <Box sx={{ width: "20%", backgroundColor: "#fff", padding: "1rem", boxShadow: "0 2px 4px rgba(0,0,0,0.1)" }}>
          <List>
            <ListItem button>
              <ListItemText primary="Current Orders" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Pending Orders" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Review Pending" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Older Orders" />
            </ListItem>
            <ListItem button>
              <ListItemText primary="Refund Orders" sx={{ color: "#2196F3" }} />
            </ListItem>
          </List>
        </Box>

        {/* Content */}
        <Container sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <Box sx={{ textAlign: "center" }}>
            <Box
              sx={{
                width: "80px",
                height: "80px",
                backgroundColor: "#2196F3",
                borderRadius: "50%",
                margin: "auto",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>P</Typography>
            </Box>
            <Typography sx={{ marginTop: "1rem", color: "#666" }}>There are no orders placed yet</Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}

export default TrackMyOrder;
