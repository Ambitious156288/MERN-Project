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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

import { useDispatch, useSelector } from 'react-redux';
import { remove, likeOne } from 'actions/posts.action';

import Box from '@material-ui/core/Box';
import Like from 'components/Like/Like';
import defaultPostImage from 'utils/images/defaultPostImage.jpg';

import { useStyles, defaultProps } from './Post.styles';
import { theme } from 'theme/mainTheme';

const Post = ({ post, setCurrentId, modalOpenFn }) => {
  const classes = useStyles();

  const dispatch = useDispatch();
  const user = useSelector(({ auth }) => auth.user);

  return (
    <>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={post.selectedFile || defaultPostImage}
          title={post.title}
        />

        <div className={classes.overlay}>
          <Typography variant="h4">{post.name}</Typography>
          <br />
          <Typography variant="body2">{`created ${moment(post.createdAt).fromNow()}`}</Typography>
        </div>

        {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
          <div className={classes.overlay2}>
            <Button
              style={{ color: theme.white }}
              onClick={() => {
                setCurrentId(post._id);
                modalOpenFn();
              }}
            >
              <EditIcon fontSize="small" />
            </Button>
          </div>
        )}

        <div className={classes.details}>
          <Typography component="span" color="primary">
            <Box display="flex" justifyContent="center">
              {post.tags.map((tag, index) => (
                <Box key={index} borderRadius="borderRadius" {...defaultProps}>{`#${tag} `}</Box>
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
          <Button
            size="small"
            color="primary"
            disabled={!user?.result}
            onClick={() => dispatch(likeOne(post._id))}
          >
            <Like post={post} />
          </Button>

          {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) && (
            <Button size="small" color="primary" onClick={() => dispatch(remove(post._id))}>
              <DeleteForeverIcon fontSize="small" /> Delete
            </Button>
          )}
        </CardActions>
      </Card>
    </>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  setCurrentId: PropTypes.func.isRequired,
  modalOpenFn: PropTypes.func.isRequired,
};

export default Post;
