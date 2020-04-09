import React from 'react';
import { FixedSizeList } from 'react-window';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import WaitingListItem from './WaitingListItem';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: '100%',
        maxWidth: 300,
        backgroundColor: theme.palette.background.paper,
    },
}));

function handleClick(event) {
    alert('test');
}

function renderRow(user) {
    // const { index, style } = props;

    return (
        <ListItem button key={user.key}>
            <ListItemText button primary={user.name} onClick={handleClick} />
        </ListItem>
    );
}

// renderRow.propTypes = {
//     index: PropTypes.number.isRequired,
//     style: PropTypes.object.isRequired,
// };

function WaitingList(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h3>Waiting-({props.waitingUsers.length})</h3>

            {/* <ListItem button>
                    <ListItemText primary="Trash"></ListItemText>
                </ListItem> */}
            {props.waitingUsers.map((user) => <WaitingListItem user={user} />)}

            {/* <FixedSizeList height={400} width={300} itemSize={46} itemCount={200}>
                <ListItem key='test'>
                    <ListItemText primary='test' />
                </ListItem>

            </FixedSizeList> */}
        </div>
    )
}

export default WaitingList;