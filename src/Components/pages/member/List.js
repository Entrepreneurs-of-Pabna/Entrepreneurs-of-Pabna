import React from 'react';
import { NavLink } from 'react-router-dom';

// Import database
import { memberData } from './memberData';

// import CSS
import './styles/list.css';


///////// USER-LIST GROUP
const List = () => {
  const thana = ["Aminpur","Ataikula","Atgharia","Bera","Bhangura","Chatmohar","Faridpur","Ishwardi","Pabna Sadar","Santhia","Sujanagar"]
  
  const arrThana = Thana => memberData.filter(member => member.address.parmanent.thana === Thana)
const selectSubmit = () => console.log(arrThana("Pabna Sadar"))
  
  // to SUM Arrey Value
  const arrSum = arr => arr.reduce((a,b) => a + b, 0)

  return(
  <div className="user-list">
    <div className="title">
      <select
        className="catagory"
        id="thanaCatagory" >

        <option 
        className="catagory-title"
        value="all"
        onClick={ ()=> selectSubmit } >
          All Member 
            ({ memberData.length })
        </option>

          {
            thana.map((thana, i)=> {
            return <option
              className="thana-item"
              key={ i }
              value={ thana }
              >{ thana } ({arrThana(thana).length})
            </option>
          })
          }

          <option value="others" className="thana-item">
            Others ({memberData.length
              - arrSum(thana.map((thana, i)=> {
                  return arrThana(thana).length}))
            })
          </option>

      </select>
      {
        console.log(document.getElementById('thanaCatagory'))
      }
    </div>
{/* Member List */}
    <ul style={{"height":"100%"}}>
      {
        memberData.map(member => {
        return <ListItem
          key={ member.id }
          url={ "/member/id=" +member.id }
          thumb={ `/images/members/${member.id}.jpg` }
          name={ member.name +" "+ member.nickname }
          designation={ member.designation }
          />
      })}
    </ul>
  </div>
  )
}
export default List;



///////// USER_LIST SINGLE
export const ListItem = (props) => {
  return(
  <li className="member-list">
    <NavLink to={ props.url } activeClassName="list-active" >
      <span className="thumb">
        <img src={ props.thumb } alt={ props.name } />
      </span>
      <span className="data">
        <p className="list-name">{ props.name }</p>
        <p className="list-title">{ props.designation }</p>
      </span>
    </NavLink>
  </li>
  )
}
