import React from 'react';

// Import database
import { galleryData } from './galleryData';


// import CSS
import './gallery.css';



// const id = Number(props.match.params.id)



///////// USER-PHOTO
export const SinglePhoto = (props) => {
  const id = props.id || 1;
  const photo = galleryData.filter(photo => photo.id === id)[0] // get a single data
  const url = "https://raw.githubusercontent.com/Entrepreneurs-of-Pabna/website/gh-pages/";
  return(
    <div className="row">
        <Photo 
          id={ id }
          title={ photo.title }
          url={ `${url}images/gallery/${photo.id}.jpg` }
          time={ photo.time }
          location={ photo.location }
          event={ photo.event }
          description={ photo.description } />
    </div>
  )
}
// { `/images/gallery/${photo.id}.jpg` }
export const Photo = (props) => {
  return(
    <div className="photo-view">
      <h1>{ props.title }</h1>
        <img 
            className="gellary-photo-view"
            src= { props.url }
            alt={ props.title } />
        <div className="photo-info">
            <h4>Photo Information:</h4>
            <p className="bold">Chapture Time : <span>{ props.time }</span></p>
            <p className="bold">Location : <span>{ props.location }</span></p>
            <p className="bold">Event Name : <span>{ props.event }</span></p>
            <p className="bold">Photo Description : <span>{ props.description }</span></p>

        </div>
    </div>
  )
}

// title
// url
// time
// location
// event
// description