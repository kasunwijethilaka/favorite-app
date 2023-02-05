import React from "react";
import { useState } from "react";
import Placeholder from "../images/placeholder.png";
import Image from "next/image";
import styles from "../styles/components/PostCard.module.scss";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function PostCard(props: any) {
  const { buttonID, itemStatus, name } = props;
  const [status, setStatus] = useState(itemStatus);
  const [id, setID] = useState("");
  const onChange = (favoriteId: any) => {
    const statusValue = !status;
    setStatus(statusValue);
    setID(favoriteId);
    favorite(statusValue, favoriteId);
  };

  const favorite = async (statusValue: any, _id: any) => {
    const response = await fetch(`/api/favorites/${_id}`, {
      method: "put",
      body: JSON.stringify({ statusValue }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
        subheader="February 1, 2023"
      />
      <Image height={200} src={Placeholder} alt="" />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" 
            onClick={() => {
              onChange(buttonID);
            }}>
          <FavoriteIcon
            className={status ? styles.post_card__favorite : ""}
            
          />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default PostCard;
