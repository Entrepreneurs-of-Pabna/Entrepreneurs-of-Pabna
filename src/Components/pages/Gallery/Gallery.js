import React from 'react'
import {Link} from 'react-router-dom'

import { galleryData } from './galleryData';
import { Block } from '../parts'


const Gallery = () => {
    return (
      <div>
        <h1>Photo Gallery</h1>
        <Block height="50px" />
        <div className="row">
          {galleryData.map( photo=> {
            return (
                <div key={ photo.id } className="col-md-3 col-sm-6 gallery">
                    <Link to={`/photo/id=${photo.id}`}>
                        <img
                        src={`/images/gallery/${photo.id}.jpg`}
                        alt={ photo.title } />
                        <h4>{ photo.title }</h4>
                    </Link>
                </div>)
            })}
        </div>
        
      </div>
    )
  }
  export default Gallery