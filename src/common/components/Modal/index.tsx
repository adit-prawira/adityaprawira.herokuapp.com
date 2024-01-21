import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { noop } from "lodash";
import { createContext, useContext, useState } from "react";

type Options = {
  title: string;
  content: JSX.Element;
};

type ModalStore = {
  open: boolean;
  handleClose: () => void;
  handleOpen: (options: Options) => void;
};
const ModalContext = createContext({
  open: false,
  handleClose: noop,
  handleOpen: noop,
});

interface ModalProviderProps {
  readonly children: React.ReactNode;
}

const initialOptions: Options = {
  title: "",
  content: <></>,
};

export function ModalProvider({ children }: ModalProviderProps): JSX.Element {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Options>(initialOptions);

  function handleClose(): void {
    setOptions(initialOptions);
    setOpen(false);
  }

  function handleOpen(options: Options): void {
    setOptions(options);
    setOpen(true);
  }

  return (
    <ModalContext.Provider
      value={{
        open,
        handleClose,
        handleOpen,
      }}
    >
      {children}
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        fullWidth
        maxWidth="md"
      >
        <DialogTitle>{options.title}</DialogTitle>
        <DialogContent dividers>{options.content}</DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="secondary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </ModalContext.Provider>
  );
}

export function useModal(): ModalStore {
  return useContext(ModalContext);
}
