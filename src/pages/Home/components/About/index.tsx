import { Grid, Typography, Button } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import { StyledBox } from "./styles";
import { useModal } from "../../../../common/components/Modal";
import { EmailForm } from "./components/EmailForm";
import { ContactDetails } from "./components/ContactDetails";

export function About(): JSX.Element {
  const { handleOpen } = useModal();
  function handleSendEmail(): void {
    handleOpen({
      title: "Email",
      content: <EmailForm />,
    });
  }

  return (
    <StyledBox>
      <div>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={8}>
            <Typography variant="h4">Hello everyone,</Typography>
            <br />
            <Typography variant="body1">
              I'm a master's student specialized in Robotics and Mechatronics
              Engineering. Dedicated to learn and improve autonomous systems to
              reduce human interaction in manufacturing complex designs.
            </Typography>
            <br />
            <Typography variant="body1">
              As an engineering student, discipline, communication and the
              flexibility to work in different environments are the main aspects
              to grow in the field. I have the passion to enhance workflow in
              building projects, and to express my ideas by building/creating
              something.
            </Typography>
            <br />
            <Typography variant="body1">
              I also produce music and you can find me as "Azure Gaze" on your
              favorite music streaming platforms like Spotify, Apple Music,
              Soundcloud, iHeartRadio, and many more.
            </Typography>
            <br />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSendEmail}
              startIcon={<EmailIcon />}
            >
              Email Me
            </Button>
          </Grid>
          <Grid item xs={12} sm={4}>
            <ContactDetails />
          </Grid>
        </Grid>
      </div>
    </StyledBox>
  );
}
