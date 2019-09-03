import React from 'react';

// import Components
import List from './List';
import Photo from './Photo';
import Social from './Social';
import Details from './Details';

//import CSS
import './styles/response.css';


export const Members = (props) => {
  const id = Number(props.match.params.id)
  return (
    <div className="row">
      <div className="col-md-5">
        <List />
      </div>
      <div className="col-md-7 row right-side right-hidden">
        <div className="col-md-5">
          <Photo id={ id }/>
          <Social id={ id } />
        </div>
        <div className="col-md-7">
          <Details id={ id } />
        </div>
      </div>
    </div>
  )
}

// export const Members = (props) => {
//   const id = Number(props.match.params.id)
//   return (
//     <div className="row">
//       <div className="col-md-5 res-list-1">
//         <List />
//       </div>
//       <div className="col-md-3 res-photo-1">
//         <Photo id={ id }/>
//         <Social id={ id } />
//       </div>
//       <div className="col-md-4 res-details-1">
//         <Details id={ id } />
//       </div>
//     </div>
//   )
// }

// export const Member = (props) => {
//   const id = Number(props.match.params.id)
//   return (
//     <div className="row">
//       <div className="col-md-5 res-list-2">
//         <List />
//       </div>
//       <div className="col-md-3 res-photo-2">
//         <Photo id={ id } />
//         <Social id={ id } />
//       </div>
//       <div className="col-md-4 res-details-2">
//         <Details id={ id } />
//       </div>
//     </div>
//   )
// }

export const Member = (props) => {
  const id = Number(props.match.params.id)
  return (
    <div className="row">
      <div className="col-md-5 left-hidden">
        <List />
      </div>
      <div className="col-md-7 row right-side">
        <div className="col-md-5">
          <Photo id={ id }/>
          <Social id={ id } />
        </div>
        <div className="col-md-7">
          <Details id={ id } />
        </div>
      </div>
    </div>
  )
}