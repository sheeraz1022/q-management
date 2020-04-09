import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import moment from 'moment'

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function onCompleteNext(event, key) {

}

function ProcessingUser(props) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Now Serving
        </Typography>
                <Typography variant="h5" component="h2">
                    {props.processingUsers[0] && props.processingUsers[0].name/* {console.log('SHEERAZ123', props.processingUsers[0])} */}

                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                    {/* {props.processingUsers[0] && moment(props.processingUsers[0].time).format("DD-MM-YYYY h:mm:ss")} */}
                    {props.processingUsers[0].phoneNum}
                </Typography>

            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary" size="small" onClick={props.onCompleteNext}>Complete & Next</Button>
                <Button variant="contained" color="default" size="small" onClick={props.onComplete}>Complete</Button>
                {/* <Button size="small" onClick={props.onStash}>Stash</Button> */}
            </CardActions>
        </Card>
    );
}

export default ProcessingUser;
