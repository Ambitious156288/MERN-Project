import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
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

export const defaultProps = {
  bgcolor: 'text.paper',
  borderColor: 'primary.main',
  m: 0.7,
  border: 1,
  padding: 0.5,
};
