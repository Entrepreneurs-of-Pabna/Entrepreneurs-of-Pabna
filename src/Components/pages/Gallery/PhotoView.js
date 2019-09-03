import React from 'react';

// Import database
import { SinglePhoto } from './Photo';

// import CSS
import './gallery.css';



// const id = Number(props.match.params.id)

const PhotoView = (props) => {
  const id = Number(props.match.params.id)
  console.log(id,props)
  return (
    <div className="row">
      <div className="col-md-3">
        <SinglePhoto id={ id }/>
      </div>
    </div>
  )
}
export default PhotoView