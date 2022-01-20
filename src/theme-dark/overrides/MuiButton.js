import { colors } from "@material-ui/core";

const MuiButton = {
    contained: {
        boxShadow: "0 1px 1px 0 rgba(0,0,0,0.14)",
        backgroundColor: colors.grey[100],
        "&:hover": {
            backgroundColor: colors.grey[300],
        },
    },
};
export default MuiButton;
