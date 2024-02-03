import {
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { StyledAvatar, StyledImage } from "./styles";
import { map } from "lodash";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Artwork } from "../../../../../../types";

interface ArtworkDetailsProps {
  readonly art: Artwork;
}

export function ArtworkDetails({ art }: ArtworkDetailsProps): JSX.Element {
  return (
    <Grid container spacing={3}>
      <Grid container item xs={12} sm={6} spacing={5}>
        <Grid item xs={12} marginRight="10px">
          <StyledImage
            src={`/Images/${
              art.title ? art.title.toLowerCase().replace(/ /g, "-") : ""
            }.png`}
            alt={art.title}
          />
        </Grid>
        <Grid item xs={12}>
          <Typography>
            <strong>Artwork Created on</strong> {art.dateCreated}
          </Typography>
          <Typography>
            <strong>Release Date on</strong> {art.releaseDate}
          </Typography>
        </Grid>
      </Grid>
      <Grid container item xs={12} sm={6}>
        <TableContainer component={Paper} elevation={3}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>#</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>
                  <AccessTimeIcon />
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {map(art.tracks, ({ time, title }, index) => (
                <TableRow key={`${title}:${index}`}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{title}</TableCell>
                  <TableCell>{time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container item xs={12}>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={4}
          >
            <a href={art.spotify}>
              <StyledAvatar
                src="/Images/spotify.jpg"
                alt={art.spotify}
                sx={{ width: 80, height: 80 }}
              />
            </a>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={4}
          >
            <a href={art.appleMusic}>
              <StyledAvatar
                src="/Images/applemusic.jpg"
                alt={art.appleMusic}
                sx={{ width: 80, height: 80 }}
              />
            </a>
          </Grid>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            item
            xs={4}
          >
            <a href={art.soundCloud}>
              <StyledAvatar
                src="/Images/soundcloud.png"
                alt={art.soundCloud}
                sx={{ width: 80, height: 80 }}
              />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
