import React from 'react'
import './User.css'
import styled from 'styled-components'
import PropTypes from 'prop-types'


const Userprofile = styled.div
`
display:flex;
gap:10px;
border:1px solid black;

`

const Pic = styled.div`
display:flex;
flex-direction: column;
`
const Info = styled.div`
text-align: left;
margin-top:100px
`
const Btn =styled.button`
width:100px;
height 40px;
border:4px solid black
text-align: center;
margin 0 auto`
function User({img,name,job,description,handleName}) {

    const handleAlert= e =>{
        handleName(name);
    }
    return (
        <div>

<Userprofile>
<Pic>
    <img src={img} alt="img" />
    <Btn onClick={handleAlert}>Alert</Btn>
    </Pic>
    <Info> <p> {name}</p>
    <p>{job}</p>
    <p>{description}</p></Info>
    
    </Userprofile>

        </div>
    )
}

User.defaultProps = {
    name: 'samah',
    job:'dev'
  
  };

User.propTypes = {
    name: PropTypes.string,
    job: PropTypes.string,

}
  
export default User
