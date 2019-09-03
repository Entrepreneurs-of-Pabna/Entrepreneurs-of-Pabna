import React from 'react';

// Import Images
import { memberData } from './memberData'

// Import Stylesheets
import './styles/social.css';


///////// SOCIAL LINK GROUP
const Social = (props) => {
  const id = props.id || 1;
  const member = memberData.filter(member => member.id === id)[0] // get a single data
  return(
  <div className="user-social">
    <div className="title">Social-Links</div>
    <ul>
      <SocialItem url={ member.social.facebook } >Facebook</SocialItem>
    </ul>
  </div>
  )
}
export default Social;


///////// SOCIAL COMPONENT SINGLE
export const SocialItem = (props) => {
  return(
  <li>
    <a href={ props.url }>
      <span>{ props.children }</span>
    </a>
  </li>
  )
}