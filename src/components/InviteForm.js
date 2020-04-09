import React, { Component } from 'react'
import database from '../utils/FirebaseDB.js';

class InviteForm extends Component {
    constructor(props) {
        super(props);
        //const [nameValue, onNameValueChange] = useState('');
        this.state = {
            nameValue: '',
            users: [],
        };
        this.onNameValueChange.bind(this);
    }

    handleSubmit(event, paramid, nameValue) {
        event.preventDefault();
        console.log('props', nameValue);
        database.ref('test/' + paramid).push().set({
            'name': nameValue,
            'status': 'WAITING',
            'time': Date.now()
        });

    }

    onNameValueChange(newValue) {
        this.setState({ nameValue: newValue });
    }

    render() {
        return (
            <div>
                {this.props.match.params.id}
                {this.props.match.params.name}

                <form onSubmit={(e) => this.handleSubmit(e, this.props.match.params.id, this.state.nameValue)}>
                    <label>
                        Name:
            <input type="text" value={this.state.nameValue} name="name" onChange={(e) => this.onNameValueChange(e.target.value)} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

            </div>

        )
    }

}






export default InviteForm;