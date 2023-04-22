import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  IconButton,
} from "@mui/material";



import s from "./Post.module.css";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import relativeTime from 'dayjs/plugin/relativeTime';
import ReplyIcon from '@mui/icons-material/Reply';



dayjs.locale('ru')
dayjs.extend(relativeTime);

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard({
  image,
  likes,
  title,
  created_at,
  text,
  author,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={s.card__hover}>
      <CardHeader
        avatar={
          <Avatar className={s.avatar} aria-label="recipe">
            <img className={s.avatar__image} src={author.avatar} alt="" />
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={author.name}
        subheader={dayjs(created_at).fromNow()}
      />
      <CardMedia component="img" height="360" image={image} alt="ghghhghghhggh" />
      <CardContent>
        <Typography variant="h6" color="title">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>

      <CardActions>


        <IconButton className={s.card__icons} aria-label="add to favorites">
          <FavoriteBorderIcon />
        </IconButton>

        <IconButton aria-label="add to favorites">
          <ChatOutlinedIcon />
        </IconButton>


        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>

        <IconButton aria-label="share">
          <ReplyIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        ></ExpandMore>
      </CardActions>
    </Card>
  );
}
