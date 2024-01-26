import { useMutation } from "react-query";
import emailjs, { EmailJSResponseStatus } from "emailjs-com";
export type EmailFormStore = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

type UseEmailResults = {
  data?: EmailJSResponseStatus;
  isLoading: boolean;
  send: (values: EmailFormStore) => void;
};

type Options = {
  onError?: (error: unknown) => void;
  onSuccess?: (data: EmailJSResponseStatus) => void;
};

export function useEmail(options?: Options): UseEmailResults {
  const { data, isLoading, mutate } = useMutation({
    async mutationFn(values: EmailFormStore) {
      return emailjs.send(
        "service_g6m7g7e",
        "template_s1l81ls",
        values,
        "user_KIPqhGTfzH2WY8fR04z5X"
      );
    },
    onSuccess(data) {
      options?.onSuccess?.(data);
    },
    onError(error) {
      options?.onError?.(error);
    },
  });

  function send(values: EmailFormStore): void {
    mutate(values);
  }

  return {
    data,
    isLoading,
    send,
  };
}
