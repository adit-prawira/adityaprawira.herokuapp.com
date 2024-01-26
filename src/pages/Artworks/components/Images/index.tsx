import { Grid } from "@mui/material";
import { get, keyBy, map } from "lodash";
import { artworks } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { useStyles } from "./styles";
import { useModal } from "../../../../common/components/Modal";
import { ArtworkDetails } from "./components/ArtworkDetails";

export function Images(): JSX.Element {
  const classes = useStyles();
  const { handleOpen } = useModal();
  const artDictionary = keyBy(artworks, "title");
  return (
    <Grid container spacing={3}>
      {map(artworks, ({ title }) => (
        <Grid item xs={4} className={classes.container} key={uuid()}>
          <img
            src={`/Images/${title.toLowerCase().replace(/ /g, "-")}.png`}
            className={classes.image}
            alt={title}
            onClick={(): void => {
              const art = get(artDictionary, title, undefined);
              if (art)
                handleOpen({
                  title,
                  content: <ArtworkDetails art={art} />,
                });
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
}
