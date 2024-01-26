import { Grid } from "@mui/material";
import { useStyles } from "./styles";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

export function Bio(): JSX.Element {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={6}>
        <div className={classes.imageContainer}>
          <img
            src="/Images/self-cartoon.png"
            alt="self"
            className={classes.image}
          />
        </div>
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
        <About />
        <Projects />
      </Grid>
    </Grid>
  );
}
