import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { v4 as uuidv4 } from "uuid";
import { Education } from "../../../../../types";

interface EducationDetailsProps {
  readonly education: Education;
}
export function EducationDetails({ education }: EducationDetailsProps) {
  const { title, degree, startYear, endYear, image, descriptions, courses } =
    education;

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <Typography>
          <strong>Company Name:</strong> {title}
        </Typography>
        <br />
        <Typography>
          <strong>Degree:</strong> {degree}
        </Typography>
        <br />
        <Typography>
          <strong>Date:</strong> {startYear} - {endYear}
        </Typography>
        <br />
        <Typography>
          <strong>Related Courses:</strong>
        </Typography>
        <ul>
          {courses.map((course) => (
            <li key={uuidv4()}>{course}</li>
          ))}
        </ul>
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
            background: "white",
            boxShadow: "10px 10px white",
            objectFit: "contain",
          }}
        />
      </Grid>
    </Grid>
  );
}
