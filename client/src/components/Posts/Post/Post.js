import React from 'react';

import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const Post = ({ post }) => {
  return (
    <>
      <Card>
        <CardMedia image={post.selectedFile} title={post.title} />
        <div>
          <h1>desc:{post.description} ///</h1>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="h6">{`created ${moment(post.createdAt).fromNow()}`}</Typography>
        </div>

        <div>
          <Button style={{ color: 'white' }} size="small" onClick={() => {}}>
            <ExpandMoreIcon fontSize="default" />
          </Button>
        </div>

        <div>
          <Typography variant="h6" color="textSecondary">
            {post.tags.map(tag => `#${tag} `)}
          </Typography>
        </div>

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {post.description}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" color="primary" ocClick={() => {}}>
            <FingerprintIcon fontSize="small" />
            Like
            {post.likeCount}
          </Button>

          <Button size="small" color="primary" ocClick={() => {}}>
            <DeleteForeverIcon fontSize="small" />
            Delete
          </Button>
        </CardActions>
      </Card>
      <hr />
      <Card>
        <CardActionArea>
          <CardMedia image={post.selectedFile} title="Contemplative Reptile" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              aa
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              aaaaaaaa
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
          <Button size="small" color="primary">
            Learn More
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
