import { Grid } from "@mui/material";
import { Box } from "grommet";
import useStyles from "./styles";
import { Bio } from "./components/Bio";
import { Artworks } from "./components/Artworks";
import PerfectScrollBar from "react-perfect-scrollbar";
import { ModalProvider } from "../../common/components/Modal";

export function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <ModalProvider>
      <Box className={classes.container}>
        <PerfectScrollBar>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Bio />
            </Grid>
            <Grid item xs={12}>
              <Artworks />
            </Grid>
          </Grid>
        </PerfectScrollBar>
      </Box>
    </ModalProvider>
  );
}
