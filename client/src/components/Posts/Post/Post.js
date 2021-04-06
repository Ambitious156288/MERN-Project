import React from 'react';

import moment from 'moment';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import FingerprintIcon from '@material-ui/icons/Fingerprint';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { deletePost, likePost } from 'actions/posts.action';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },
  media: {
    height: 0,
    paddingTop: '56.25%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    backgroundBlendMode: 'darken',
  },
  overlay: {
    position: 'absolute',
    top: '20px',
    left: '20px',
    color: 'white',
  },
  overlay2: {
    position: 'absolute',
    top: '20px',
    right: '20px',
    color: 'white',
  },
  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '20px',
  },
  title: {
    padding: '0 16px',
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0 16px 8px 16px',
  },
});

const Post = ({ post, setCurrentId, modalOpenFn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h6">{post.creator}</Typography>
          <Typography variant="body2">{`created ${moment(post.createdAt).fromNow()}`}</Typography>
        </div>

        <div className={classes.overlay2}>
          <Button
            style={{ color: 'white' }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
              modalOpenFn();
            }}
          >
            <EditIcon fontSize="default" />
          </Button>
        </div>

        <div className={classes.details}>
          <Typography variant="body2" color="textSecondary" component="h2">
            {post.tags.map(tag => `#${tag} `)}
          </Typography>
        </div>

        <Typography className={classes.title} gutterBottom variant="h5" component="h2">
          {post.title}
        </Typography>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {post.description}
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))}>
            <FingerprintIcon fontSize="small" /> &nbsp; Like &nbsp; {post.likeCount}
          </Button>
          <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))}>
            <DeleteForeverIcon fontSize="small" /> &nbsp; Delete
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Post;
