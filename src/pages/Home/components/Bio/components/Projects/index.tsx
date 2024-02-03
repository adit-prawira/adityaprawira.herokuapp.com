import { useState } from "react";
import Grid from "@mui/material/Grid";

import { get, keyBy, map } from "lodash";
import { projects } from "../../../../../../seedInfo";

import {
  Button,
  Card,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import ChevronRightRounded from "@mui/icons-material/ChevronRightRounded";
import Carousel from "react-spring-3d-carousel";
import { config } from "@react-spring/web";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { useModal } from "../../../../../../common/components/Modal";
import { ProjectDetails } from "../../../ProjectTimeline/components/ProjectDetails";
import { StyledCarouselContainer } from "./styles";

export function Projects(): JSX.Element {
  const [goToSlide, setGoToSlide] = useState(1);
  const { handleOpen } = useModal();
  const projectDictionary = keyBy(projects, "title");

  return (
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
      <StyledCarouselContainer>
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
                  <Grid container spacing={1}>
                    <Grid container item xs={12} justifyContent="flex-end">
                      <Typography>{title}</Typography>
                    </Grid>
                    <Grid container item xs={12} justifyContent="flex-end">
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<ChevronRightRounded />}
                        onClick={() => {
                          const project = get(
                            projectDictionary,
                            title,
                            undefined
                          );
                          if (project) {
                            handleOpen({
                              title,
                              content: <ProjectDetails project={project} />,
                            });
                          }
                        }}
                      >
                        See more
                      </Button>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            ),
          }))}
          goToSlide={goToSlide}
          offsetRadius={2}
          showNavigation={false}
          animationConfig={config.gentle}
        />
      </StyledCarouselContainer>
    </Grid>
  );
}
