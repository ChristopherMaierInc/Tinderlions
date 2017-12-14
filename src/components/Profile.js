import React, { Component } from 'react';
import { Button } from 'reactbulma'

class Profile extends Component {

  state = {
    user: null
  }
  getNextUser = () => {
    fetch('https://randomuser.me/api/?gender=male')
    .then((response) => {
      return response.json()
    })
    .then(users => {
      users.results[0].name.first
    })
  }

  render() {
    return (
      <div>
        <p>Profile!</p><br />

        <Button primary>Next</Button>
      </div>
    );
  }
}

export default Profile;
