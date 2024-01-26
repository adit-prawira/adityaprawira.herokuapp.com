import { Grid } from "@mui/material";
import { Box } from "grommet";
import useStyles from "./styles";
import { Bio } from "./components/Bio";
import PerfectScrollBar from "react-perfect-scrollbar";
import { ModalProvider } from "../../common/components/Modal";
import Page from "../../common/components/Page";
import { About } from "./components/About";
import { ProjectTimeline } from "./components/ProjectTimeline";
import { EducationTimeline } from "./components/EducationTimeline";
import { WorkExperienceTimeline } from "./components/WorkExperienceTimeline";

export function Home(): JSX.Element {
  const classes = useStyles();

  return (
    <Page>
      <ModalProvider>
        <Box className={classes.container}>
          <PerfectScrollBar>
            <Grid container spacing={10}>
              <Grid item xs={12}>
                <Bio />
              </Grid>
              <Grid item xs={12}>
                <About />
              </Grid>
              <Grid item xs={12}>
                <WorkExperienceTimeline />
              </Grid>
              <Grid item xs={12}>
                <EducationTimeline />
              </Grid>
              <Grid item xs={12}>
                <ProjectTimeline />
              </Grid>
            </Grid>
          </PerfectScrollBar>
        </Box>
      </ModalProvider>
    </Page>
  );
}
