import React from 'react';

// import Database
import { memberData } from './memberData';
import { Block } from '../parts';

// import CSS
import './styles/details.css';


///////// USER-DETAILS
const Details = (props) => {
  const id = props.id || 1;
  const member = memberData.filter(member => member.id === id)[0] // get a single data

  // reDefine some object Value
  const { present, parmanent } = member.address;
  const prePost = present.post;
  const preThana = ", " + present.thana;
  const preDistrict = ", " + present.district;

  const parPost = parmanent.post;
  const parThana = ", " + parmanent.thana;
  const parDistrict = ", " + parmanent.district;

  let presentAddress =
    `${present.vill.length > 0 ? present.vill : ""}
    ${present.post.length > 0 ? prePost : ""}
    ${present.thana.length > 0 ? preThana  : ""}
    ${present.district.length > 0 ? preDistrict : ""}`;
  
  let parmanentAddress =
    `${parmanent.vill.length > 0 ? present.vill : ""}
    ${parmanent.post.length > 0 ? parPost : ""}
    ${parmanent.thana.length > 0 ? parThana  : ""}
    ${parmanent.district.length > 0 ? parDistrict : ""}`;

// Screte Phone number of Females
  const empty = data => `The User didn't add ${member.gender === "male" ? "his":"her"} ${data}.`

  const userPhone = member.gender === "male" ? member.phone : "Content Hidden";

  const userDoB = member.DoB ? member.DoB.toDateString() : empty("birthDay");

  const userAge = member.DoB ? parseInt((Date.parse(Date()) - Date.parse(member.DoB))/(365*86400000)) + " Years": 0;

  const userOccupatons = <tbody>
          <h4 className="bold">Occupations:</h4>
          {
          member.occupation.map((occupation, i) => {
          return(
            <Detail
              key={ i }
              title={ occupation.name }
            value= {`${occupation.position} at ${occupation.institution}`} />
          )})
    }
    </tbody>
    
  return(
    <div className="user-details">
        <h1>{ member.name }</h1>
        <h4>{ member.designation }</h4>
        <table>
          <tbody>
            <Detail title="Member ID" value={ member.id } />

            <Detail title="Gender" value={ member.gender } />

            <Detail title="Date of Birth" value={ userDoB } />

            <Detail title="Age" value={ userAge } />

            <Detail title="Email" value={ member.email ?member.email : empty("email") } />

            <Detail title="Phone" value={ member.phone ? userPhone : empty("phone number") } />

            <Detail title="Blood Group" value={ member.blood ? member.blood : empty("blood group")} />

            <Detail title="Present Address" value={ presentAddress  } />

            <Detail title="Parmanent Address" value={ parmanentAddress  } />

            <Detail title="Batch" value={ member.batch + " ( নিজে বলার মত একটা গল্প )" } />
            
          </tbody>
            { member.occupation.length > 0 ? userOccupatons
              :<tbody>
                <Detail title="Occupation" value={ empty("any occupation") } />
              </tbody> }
        </table>
      </div>
  )
}
export default Details


///////// DETAILS-ROW-SINGLE
export const Detail = (props) => {
  return(
      <tr>
        <td className="td-key"> { props.title } </td>
        <td> { props.value } </td>
      </tr>
  )
}