import { AppBar, Box, Toolbar, Container, Button } from "@mui/material";
import { menuItems } from "../routesAndMenutItems";
import { MobileAppBar } from "./MobileAppbar.component";

export function ResponsiveAppBar() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MobileAppBar />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((page) => (
              <Button
                key={page.title}
                // onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
                href={page.link}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
