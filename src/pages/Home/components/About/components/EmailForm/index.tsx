import SendIcon from "@mui/icons-material/Send";
import { Grid, TextField } from "@mui/material";

import { useModal } from "../../../../../../common/components/Modal";
import { useForm } from "react-hook-form";
import { EmailFormStore, useEmail } from "./hooks/useEmail";
import { useToast } from "../../../../../../common/components/ToastProvider";
import { LoadingButton } from "@mui/lab";

export function EmailForm(): JSX.Element {
  const { handleClose } = useModal();
  const { notify } = useToast();
  const { register, handleSubmit } = useForm<EmailFormStore>();
  const { send, isLoading } = useEmail({
    onSuccess() {
      notify("Successfully sent email", {
        position: "bottom-left",
        type: "success",
      });
      handleClose();
    },
    onError() {
      notify("Unable to send email!", {
        position: "bottom-left",
        type: "error",
      });
    },
  });
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        send(data);
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
          <LoadingButton
            loading={isLoading}
            loadingPosition="start"
            type="submit"
            aria-label="Next"
            variant="contained"
            color="primary"
            startIcon={<SendIcon />}
            fullWidth
          >
            Send Message
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
}
