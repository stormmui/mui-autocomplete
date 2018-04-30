// This was a SimpleMediaCard
import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Card, { CardContent, CardMedia } from "material-ui/Card";
import Typography from "material-ui/Typography";

const styles = {
  card: {
    maxWidth: 175
  },
  media: {
    height: 90
  }
};

function Gh1Card(props) {
  const { classes, tile } = props;
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={tile.avatar}
          title={tile.login}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="p">
            <a href={"https://github.com/" + tile.login}>{tile.login}</a>
          </Typography>
          <Typography component="p">{tile.name}</Typography>
          <Typography component="p">
            <b>{tile.location}</b>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

Gh1Card.propTypes = {
  classes: PropTypes.object.isRequired,
  tile: PropTypes.object.isRequired
};

export default withStyles(styles)(Gh1Card);
