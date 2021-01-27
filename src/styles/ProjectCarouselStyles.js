import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    bottomCarousel: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        overflow: "hidden",
        borderRadius: "5px",
        backgroundColor: "none",
    },
    gridListHorizontal: {
        flexWrap: "nowrap",
        // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
        transform: "translateZ(0)",
    },
    titleProject: {
        textDecoration: "none",
        color: "azure",
        "&:hover": {
            color: "rgb(240,248,255,0.5)",
        },
    },
    titleBar: {
        background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0) 100%)",
    },
}));

export default useStyles;
