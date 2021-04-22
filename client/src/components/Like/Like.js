import React from 'react';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

const Like = ({ post }) => {
  const user = JSON.parse(localStorage.getItem('profile'));

  if (post.likes.length > 0) {
    return post.likes.find(like => like === user) ? (
      <>
        <FingerprintIcon fontSize="small" />
        &nbsp;
        {post.likes.length > 2
          ? `You and ${post.likes.length - 1} others`
          : `${post.likes.length} like${post.likes.length > 1 ? 's' : ''}`}
      </>
    ) : (
      <>
        <FingerprintIcon fontSize="small" />
        &nbsp;{post.likes.length} {post.likes.length === 1 ? 'Like' : 'Likes'}
      </>
    );
  }

  return (
    <>
      <FingerprintIcon fontSize="small" />
      &nbsp;Like
    </>
  );
};

export default Like;
