import React from "react";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
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
