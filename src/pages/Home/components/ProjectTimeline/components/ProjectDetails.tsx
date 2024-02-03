import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { v4 as uuidv4 } from "uuid";
import { map } from "lodash";
import { Project } from "../../../../../types";
import { StyledImage } from "./styles";

interface ProjectDetailsProps {
  readonly project: Project;
}
export function ProjectDetails({ project }: ProjectDetailsProps): JSX.Element {
  const { descriptions, startPeriod, endPeriod, image, title } = project;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <Typography>
          <strong>Project Title:</strong> {title}
        </Typography>
        <br />
        <Typography>
          <strong>Date:</strong> {startPeriod} - {endPeriod}
        </Typography>
        <br />
        <Typography>
          <strong>Descriptions:</strong>
        </Typography>
        <ul>
          {map(descriptions, (d) => (
            <li key={uuidv4()}>{d}</li>
          ))}
        </ul>
      </Grid>
      <Grid
        item
        xs={12}
        sm={5}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <StyledImage src={image} alt={title} width={300} />
      </Grid>
    </Grid>
  );
}
