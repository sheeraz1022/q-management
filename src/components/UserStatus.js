import React, { Component } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { Container } from '@material-ui/core';
import database from '../utils/FirebaseDB';


export default class UserStatus extends Component {
    constructor() {
        super();
        this.state = {
            waitingLength: 0,
        };
    }

    componentDidMount() {
        database.ref('/test/' + this.props.match.params.id).orderByKey().endAt(this.props.match.params.userkey).on('value', (s) => {
            var index = 0;
            s.forEach((child) => {
                index++;
            })
            this.setState({ waitingLength: index })
            //console.log('RETURNED', index);
        });
    }


    render() {
        return (
            <>
                {this.state.waitingLength}
                <Container>
                    <h1><CheckCircleIcon color="primary" fontSize="large" /></h1><h3>Thanks for registration. Please be patient, you will be served shortly.</h3>

                </Container>
            </>
        );
    }
}