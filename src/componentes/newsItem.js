import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    minHeight: 450,
    maxHeight: 450,
    overflowY: 'hidden',
  },
});

export default function NewsItem(props) {
  const classes = useStyles();
  const { news } = props;
  console.log(news);
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={news.title}
          height="140"
          image={news.urlToImage}
          title={news.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {news.title.substring(0, 30)}...
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {news.description ? news.description.substring(0, 60) : ''}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Compartir
        </Button>
        <Button size="small" color="primary">
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
