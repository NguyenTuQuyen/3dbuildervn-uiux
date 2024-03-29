import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faUndo } from '@fortawesome/free-solid-svg-icons'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authAction'

const SignedInLinks = (props) => {
  return (
    <div>
      <DropdownButton id="dropdown-basic-button" title={<FontAwesomeIcon icon={faUser} />}>
        <Dropdown.Item href="/profile"><a><FontAwesomeIcon icon={faUser} />Profile</a></Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="/"><a onClick={props.signOut}><FontAwesomeIcon icon={faUndo} />Logout</a></Dropdown.Item>
      </DropdownButton>
    </div>
  )

}
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks)
