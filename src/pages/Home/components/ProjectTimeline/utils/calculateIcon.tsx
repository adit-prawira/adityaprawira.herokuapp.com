import TimelineDot from "@mui/lab/TimelineDot";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import AlbumIcon from "@mui/icons-material/Album";
import BrushIcon from "@mui/icons-material/Brush";
import BuildIcon from "@mui/icons-material/Build";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";

export function calculateIcon(type: string): JSX.Element {
  if (type === "art")
    return (
      <TimelineDot color="info">
        <BrushIcon />
      </TimelineDot>
    );

  if (type === "engineering")
    return (
      <TimelineDot color="info">
        <BuildIcon />
      </TimelineDot>
    );

  if (type === "game")
    return (
      <TimelineDot color="info">
        <SportsEsportsIcon />
      </TimelineDot>
    );

  if (type === "music")
    return (
      <TimelineDot color="primary">
        <AlbumIcon />
      </TimelineDot>
    );

  return (
    <TimelineDot color="primary">
      <LaptopMacIcon />
    </TimelineDot>
  );
}
