import SendIcon from "@mui/icons-material/Send";
import { Grid, Button, TextField } from "@mui/material";

import emailjs from "emailjs-com";
import { useModal } from "../../../../../common/components/Modal";
import { useForm } from "react-hook-form";

export function EmailForm(): JSX.Element {
  const { handleClose } = useModal();
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        try {
          await emailjs.send(
            "service_g6m7g7e",
            "template_s1l81ls",
            data,
            "user_KIPqhGTfzH2WY8fR04z5X"
          );
          handleClose();
        } catch (err) {
          console.error(err);
        }
      })}
    >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            placeholder="Name"
            required
            {...register("name", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            type="email"
            placeholder="Your Email"
            {...register("email", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            type="text"
            placeholder="Subject"
            {...register("subject")}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            id=""
            multiline
            rows={10}
            placeholder="Messages"
            {...register("message", { required: true })}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            aria-label="Next"
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            fullWidth
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}
