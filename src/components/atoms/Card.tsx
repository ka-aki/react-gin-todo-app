import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const TodoCard: React.FC = ({ children }) => {
  return (
    <Card style={{ width: 200, height: 150, margin: 25 }}>
      <CardActionArea style={{ height: "100%" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {children}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TodoCard;
