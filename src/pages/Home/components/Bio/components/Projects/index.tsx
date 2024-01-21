import React, { useState } from "react";
import Grid from "@mui/material/Grid";

import useStyles from "../../../../../../styles/ProjectCarouselStyles";
import { Link } from "react-router-dom";
import { map } from "lodash";
import { projects } from "../../../../../../seedInfo";

import { Card, CardContent, CardMedia, IconButton } from "@mui/material";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

export function Projects(): JSX.Element {
  const classes = useStyles();
  const [goToSlide, setGoToSlide] = useState(1);

  return (
    <Grid item xs={12} sm={12}>
      <Grid container>
        <Grid container item xs={6} justifyContent="flex-start">
          <IconButton
            onClick={() => setGoToSlide(goToSlide - 1)}
            color="primary"
            size="medium"
          >
            <ChevronLeftIcon />
          </IconButton>
        </Grid>
        <Grid container item xs={6} justifyContent="flex-end">
          <IconButton
            onClick={() => setGoToSlide(goToSlide + 1)}
            color="primary"
            size="medium"
          >
            <ChevronRightIcon />
          </IconButton>
        </Grid>
      </Grid>
      <div
        style={{
          width: "100%",
          height: "400px",
          margin: "0 auto",
        }}
      >
        <Carousel
          slides={map(projects, ({ title, image }) => ({
            key: title,
            content: (
              <Card
                key={title}
                style={{ width: 300, borderRadius: 30, height: 400 }}
              >
                <CardMedia>
                  <img
                    src={image}
                    alt={title}
                    style={{
                      width: "100%",
                      height: 300,
                      objectFit: "cover",
                    }}
                  />
                </CardMedia>
                <CardContent>
                  <Link
                    to={`/projects/${title.toLowerCase().replace(/ /g, "-")}`}
                    className={classes.titleProject}
                  >
                    {title}
                    <ChevronRightRounded />
                  </Link>
                </CardContent>
              </Card>
            ),
          }))}
          goToSlide={goToSlide}
          offsetRadius={4}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </div>
    </Grid>
  );
}
