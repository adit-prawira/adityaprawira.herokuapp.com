import { useState } from "react";
import { Page, Document, pdfjs } from "react-pdf";
import { Grid, Typography, CircularProgress } from "@mui/material";

import { OnDocumentLoadSuccess } from "react-pdf/dist/cjs/shared/types";
import { useModal } from "../../../../../../common/components/Modal";
import {
  StyledButton,
  StyledHeaderContainer,
  StyledLoadingContainer,
} from "./styles";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export function About(): JSX.Element {
  const { handleOpen } = useModal();
  const [numPages, setNumPages] = useState<number>(1);

  const handleLoad: OnDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  function handleRenderPDF(): void {
    handleOpen({
      title: "Resume",
      content: (
        <Document
          file="JobDocuments/resume.pdf"
          onLoadSuccess={handleLoad}
          loading={
            <StyledLoadingContainer>
              <CircularProgress size={300} color="primary" thickness={1} />
            </StyledLoadingContainer>
          }
        >
          <Page pageNumber={numPages} />
        </Document>
      ),
    });
  }

  return (
    <>
      <StyledHeaderContainer container>
        <Grid container item xs={8} alignItems="center">
          <Typography variant="h3">Aditya Prawira</Typography>
        </Grid>
        <Grid
          container
          item
          xs={4}
          justifyContent="flex-end"
          alignItems="center"
        >
          <StyledButton
            variant="contained"
            color="primary"
            onClick={handleRenderPDF}
          >
            Resume
          </StyledButton>
        </Grid>
      </StyledHeaderContainer>
      <Typography gutterBottom variant="body1">
        Aiming to apply proven skills and continuously learn new technology
        stack in improving human productivity through a piece of software.
      </Typography>
    </>
  );
}
