import React from 'react';
import { useSelector } from 'react-redux';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const Like = ({ post }) => {
  const user = useSelector(({ auth }) => auth.user);

  if (post?.likes?.length > 0) {
    return post.likes.find(like => like === (user?.result?.googleId || user?.result?._id)) ? (
      <>
        <FingerprintIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others like it`
          : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
      </>
    ) : (
      <>
        <FingerprintIcon fontSize="small" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
      </>
    );
  } else
    return (
      <>
        <FingerprintIcon fontSize="small" />
        &nbsp;Like
      </>
    );
};

export default Like;
