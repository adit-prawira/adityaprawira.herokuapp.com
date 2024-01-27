import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";
import { WorkExperience } from "../../../../../types";

interface WorkExperienceDetailsProps {
  readonly workExperience: WorkExperience;
}

export function WorkExperienceDetails({
  workExperience,
}: WorkExperienceDetailsProps) {
  const { title, companyName, location, start, end, image, descriptions } =
    workExperience;
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <Typography>
          <strong>Position:</strong> {title}
        </Typography>
        <Typography>
          <strong>Company Name:</strong> {`${companyName}, ${location}`}
        </Typography>
        <br />
        <Typography>
          <strong>Work Period:</strong> {`${start} - ${end}`}
        </Typography>
        <br />
        <Typography>
          <strong>Descriptions:</strong>
        </Typography>
        <ul>
          {descriptions.map((d) => (
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
