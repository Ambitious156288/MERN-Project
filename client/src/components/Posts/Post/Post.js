import React from 'react';
import PropTypes from 'prop-types';
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

import Box from '@material-ui/core/Box';

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
    paddingTop: '37%',
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
    justifyContent: 'center',
    margin: '15px 0',
  },
  title: {},
  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
});

const defaultProps = {
  bgcolor: 'text.paper',
  borderColor: 'primary.main',
  m: 0.7,
  border: 1,
  padding: 0.5,
};

const Post = ({ post, setCurrentId, modalOpenFn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  return (
    <>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
        <div className={classes.overlay}>
          <Typography variant="h4">{post.creator}</Typography>
          <br />
          <Typography variant="body2">{`created ${moment(post.createdAt).fromNow()}`}</Typography>
        </div>

        <div className={classes.overlay2}>
          <Button
            style={{ color: 'white' }}
            onClick={() => {
              setCurrentId(post._id);
              modalOpenFn();
            }}
          >
            <EditIcon fontSize="small" />
          </Button>
        </div>

        <div className={classes.details}>
          <Typography component="p" color="primary">
            <Box display="flex" justifyContent="center">
              {post.tags.map(tag => (
                <Box borderRadius="borderRadius" {...defaultProps}>{`#${tag} `}</Box>
              ))}
            </Box>
          </Typography>
        </div>

        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h5" component="h2">
            {post.title}
          </Typography>

          <Typography variant="h6">{post.description}</Typography>
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

Post.propTypes = {
  post: PropTypes.object.isRequired,
  setCurrentId: PropTypes.number.isRequired,
  modalOpenFn: PropTypes.func.isRequired,
};

export default Post;
