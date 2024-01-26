import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Projects } from "./components/Projects";
import { About } from "./components/About";
import { Slide } from "react-awesome-reveal";

export function Bio(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <Slide triggerOnce>
          <div className={classes.imageContainer}>
            <img
              src="/Images/self-cartoon.png"
              alt="self"
              className={classes.image}
            />
          </div>
        </Slide>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={12}
        lg={6}
        justifyContent="flex-end"
        paddingLeft="10px"
      >
        <Slide direction="right" triggerOnce delay={500}>
          <div>
            <About />
            <Projects />
          </div>
        </Slide>
      </Grid>
    </Grid>
  );
}
