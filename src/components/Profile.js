import React, { Component } from 'react';
import { Button } from 'reactbulma'

class Profile extends Component {

  state = {
    user: null
  }

  getNextUser = () => {
    fetch('https://randomuser.me/api/?gender=female')
    .then((response) => {
      return response.json()
    })
    .then(users => {
      this.setState({
        user: users.results[0]
      })
    })
  }

  render() {
    const { user } = this.state
    return (
      <div>
        { !user ? (<p>Loading...</p>) : (
          <div>
            <p>{ user.name.first }</p><br />
            <Button primary>Next</Button>
          </div>
          )
        }
        </div>
    );
  }

  componentDidMount() {
    this.getNextUser()
  }
}

export default Profile;
