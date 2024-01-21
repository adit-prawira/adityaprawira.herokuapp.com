import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Typography from "@mui/material/Typography";
import { withStyles } from "@mui/styles";
import styles from "./styles/PdfControlPanelStyles";

const PdfControlPanel = ({ pageNumber, numPages, setPageNumber, classes }) => {
  const isFirstPage = pageNumber === 1;
  const isLastPage = pageNumber === numPages;
  const handleNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePrevious = () => {
    setPageNumber(pageNumber - 1);
  };
  return (
    <div className={classes.root}>
      {!isFirstPage && (
        <NavigateBeforeIcon
          onClick={handlePrevious}
          className={classes.icon}
          disabled={isFirstPage}
        />
      )}
      <Typography>
        Page {pageNumber} of {numPages}
      </Typography>
      {!isLastPage && (
        <NavigateNextIcon
          onClick={handleNext}
          className={classes.icon}
          disabled={isLastPage}
        />
      )}
    </div>
  );
};
export default withStyles(styles)(PdfControlPanel);
