import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

import { v4 as uuidv4 } from "uuid";
import { map } from "lodash";
import { Project } from "../../../../../types";

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
        <img
          src={image}
          alt={title}
          width={300}
          style={{
            border: "1px solid black",
            borderRadius: "10px",
            boxShadow: "10px 10px white",
          }}
        />
      </Grid>
    </Grid>
  );
}
