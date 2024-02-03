import { Grid } from "@mui/material";
import { get, keyBy, map } from "lodash";
import { artworks } from "../../../../seedInfo";
import { v4 as uuid } from "uuid";
import { Image, ImageContainer } from "./styles";
import { useModal } from "../../../../common/components/Modal";
import { ArtworkDetails } from "./components/ArtworkDetails";

export function Images(): JSX.Element {
  const { handleOpen } = useModal();
  const artDictionary = keyBy(artworks, "title");
  return (
    <Grid container spacing={3}>
      {map(artworks, ({ title }) => (
        <ImageContainer item xs={4} key={uuid()}>
          <Image
            src={`/Images/${title.toLowerCase().replace(/ /g, "-")}.png`}
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
        </ImageContainer>
      ))}
    </Grid>
  );
}
