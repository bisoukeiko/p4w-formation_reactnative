import React, { Component } from 'react'
import profileImg from '../profile.png';
import axios from 'axios';

class Profile extends Component {7

    state = {
        data: {}
    }

    componentDidMount = () => {
    //   console.log(this.props.match.params.profileId);

        const data = this.props.match.params.profileId;

        let payload = {
            token: "qlqjhqzjfmopj",
            data: {
                name: "nameFirst",
                email: "internetEmail",
                phone: "phoneHome",
                _repeat: 10
            }
        };

        axios({
            method: "post",
            url: "https://app.fakejson.com/q",
            data: payload
        }).then(resp => {
            this.setState({
                data: resp.data[data]
            })
        });

    }
    

    render() {

        const {name, email, phone} = this.state.data;

        return (
            <div className='container mt-3'>
                <h1>Profile</h1>

                <img src={profileImg} alt='profile' />

                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'><strong>Nom: </strong>{name}</li>
                    <li className='list-group-item'><strong>Email: </strong>{email}</li>
                    <li className='list-group-item'><strong>Tel: </strong>{phone}</li>

                </ul>
            </div>
        )
    }
}

export default Profile;
