import { Box, Button } from "@mui/material";
import reactLogo from "../assets/react.svg";
import { Image } from "../common";
import viteLogo from "/vite.svg";

const logos = {
  vite: {
    href: "https://vitejs.dev",
    target: "_blank",
    source: viteLogo,
    altText: "Vite logo",
    style: { height: "50px", width: "40px", padding: "0px 10px" },
  },
  react: {
    href: "https://react.dev",
    target: "_blank",
    source: reactLogo,
    altText: "React logo",
    style: { height: "50px", width: "40px", padding: "0px 10px" },
  },
};

const detailsList = [
  "Husky used for pre-commit git hooks",
  "MUI used for styling the application",
];

export function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      pt="50px"
      sx={{ padding: { xs: " 0 20px", md: "0px" } }}
    >
      <h1>CoinRoutes assessment</h1>
      <p
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        This assessment application is built with React and Bundled with VITE{" "}
      </p>
      <div>
        {" "}
        {Object.entries(logos).map(
          ([key, { href, target, source, altText, style }]) => {
            return (
              <Image
                key={key}
                href={href}
                target={target}
                source={source}
                altText={altText}
                style={style}
              />
            );
          }
        )}
      </div>
      <p>
        Click on "Dashboard" in the navigation bar on top to view the
        application{" "}
        <Button variant="contained" sx={{ ml: "20px" }} href="/dashboard">
          Or Click Here
        </Button>
      </p>
      <div>
        <h4>Details:</h4>
        <ul>
          {detailsList.map((listItem, index) => {
            return <li key={index}>{listItem}</li>;
          })}
        </ul>
      </div>
    </Box>
  );
}
