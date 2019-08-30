import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUndo, faBars } from '@fortawesome/free-solid-svg-icons'
import {DropdownButton, Dropdown} from 'react-bootstrap'
export class SignedInLinks extends Component {
  render() {
    return (
      <ul>
        <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faBars} />}>
          <Dropdown.Item href="#/action-1"><NavLink to="/profile"><FontAwesomeIcon icon={faUser} />Profile</NavLink></Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#/action-2"><NavLink to="/"><FontAwesomeIcon icon={faUndo} />Logout</NavLink></Dropdown.Item>
        </DropdownButton>
      </ul>
    )
  }
}

export default SignedInLinks
