import React, { Component } from 'react';
import database from '../utils/FirebaseDB';
import Header from './Header';
import { Grid, Button } from '@material-ui/core';
import Container from '@material-ui/core/Container';
import WaitingList from './WaitingList.js';
import ProcessingUser from './ProcessingUser';
import PieChart from './PieChart';
import NoProcessingCard from './NoProcessingCard';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.company = this.props.match.params.id;
        this.state = {
            companyDetails: {},
            waitingUsers: [],
            processingUsers: [],
            completedUsers: []
        };

        this.onClickProcessNext.bind(this);
        this.onComplete.bind(this);
        this.onCompleteNext.bind(this);
    }

    componentDidMount() {

        database.ref('company/' + this.company).once('value').then((s) =>
            this.setState({ companyDetails: s.val() }));

        database.ref('test/' + this.props.match.params.id).on('value', (s) => {

            let waitingList = [];
            let processingList = [];
            let completedList = [];
            s.forEach((child) => {
                switch (child.val().status) {
                    case 'WAITING':
                        waitingList.push({ key: child.key, ...child.val() });
                        break;

                    case 'PROCESSING':
                        processingList.push({ key: child.key, ...child.val() });
                        break;

                    case 'COMPLETED':
                        completedList.push({ key: child.key, ...child.val() });
                        break;
                }
                //usersList.push({ key: child.key, ...child.val() });
            });

            this.setState({
                waitingUsers: waitingList,
                processingUsers: processingList,
                completedUsers: completedList
            });
        }
        );
    }

    onClickProcessNext(event) {
        if (this.state.waitingUsers.length > 0) {
            let nextUser = { ...this.state.waitingUsers[0] };
            const path = 'test/' + this.props.match.params.id + '/' + nextUser.key;
            database.ref(path).child('status').set('PROCESSING');

        }
    }

    onComplete(event) {
        let user = { ...this.state.processingUsers[0] };
        const path = 'test/' + this.props.match.params.id + '/' + user.key;
        database.ref(path).child('status').set('COMPLETED');
    }

    onCompleteNext(event) {

        this.onComplete(event);
        this.onClickProcessNext(event);
    }



    render() {
        return (
            <div>
                <Header title={this.state.companyDetails && this.state.companyDetails.name} />
                <Container>
                    <Grid spacing={5} container>
                        <Grid item lg={10}>
                            {this.state.processingUsers.length === 0 ? <NoProcessingCard onClickNext={(e) => this.onClickProcessNext(e)} /> :
                                <ProcessingUser onCompleteNext={(e) => this.onCompleteNext(e)}
                                    onComplete={(e) => this.onComplete(e)}
                                    onStash={(e) => this.onStash(e)}
                                    processingUsers={this.state.processingUsers} />}

                            <PieChart completedLength={this.state.completedUsers.length} waitingLength={this.state.waitingUsers.length} />

                        </Grid>
                        <Grid item lg={2}>

                            <WaitingList waitingUsers={this.state.waitingUsers} />

                        </Grid>
                        }
                    </Grid>
                </Container>




            </div>
        )
    }
}

export default Dashboard;