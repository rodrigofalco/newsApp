import { useQuery } from 'react-query';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import NewsItem from '../componentes/newsItem';
import { getNews } from '../services/newsApi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Home() {
  const classes = useStyles();
  const { isLoading, error, data } = useQuery('repoData', getNews);
  if (isLoading) return 'Loading...';
  if (error) return 'An error has occurred: ' + error.message;
  console.log(data);
  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
        {data.articles.map((e) => {
          return (
            <Grid item xs>
              <NewsItem news={e} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}
