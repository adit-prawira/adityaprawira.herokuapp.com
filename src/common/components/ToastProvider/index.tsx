import { noop } from "lodash";
import React, { createContext, useContext } from "react";
import { ToastContainer, ToastOptions, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastStore = {
  notify: (message: string, options?: ToastOptions) => void;
};
const ToastContext = createContext<ToastStore>({
  notify: noop,
});

interface ToastProviderProps {
  readonly children: React.ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps): JSX.Element {
  function notify(message: string, options?: ToastOptions): void {
    toast(message, options);
  }

  return (
    <ToastContext.Provider
      value={{
        notify,
      }}
    >
      {children}
      <ToastContainer />
    </ToastContext.Provider>
  );
}

export function useToast(): ToastStore {
  return useContext(ToastContext);
}
