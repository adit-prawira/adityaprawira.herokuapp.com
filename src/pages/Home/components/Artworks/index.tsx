import {
  IconButton,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from "@mui/material";
import { map } from "lodash";
import React from "react";

import InfoIcon from "@mui/icons-material/Info";
import { artworks } from "../../../../seedInfo";

export function Artworks(): JSX.Element {
  return (
    <ImageList>
      {map(artworks, ({ title, dateCreated }) => (
        <ImageListItem key={title}>
          <img
            src={`/Images/${title.toLowerCase().replace(/ /g, "-")}.png`}
            alt={title}
          />
          <ImageListItemBar
            title={title}
            subtitle={<span>Created in: {dateCreated}</span>}
            actionIcon={
              <IconButton aria-label={`info about ${title}`}>
                <InfoIcon htmlColor="rgba(255, 255, 255, 0.54)" />
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}
