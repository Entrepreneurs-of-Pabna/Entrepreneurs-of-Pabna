import React from 'react';

// Import database
import { memberData } from './memberData';

// import CSS
import './styles/photo.css';

///////// USER-PHOTO
const Photo = (props) => {
  const id = props.id || 1;
  const member = memberData.filter(member => member.id === id)[0] // get a single data
  return <img 
    className="user-photo"
    src={ `/images/members/${member.id}.jpg` }
    alt={ member.name } />
}
export default Photo;