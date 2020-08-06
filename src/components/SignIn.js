import React, {useState} from 'react'

function SignIn(props) {
    console.log(props.location.pathname)
    const [inpEmail, setinpEmail] = useState('')
    const [inpPassword, setinpPassword] = useState('')
    const [isEmpty, setisEmpty] = useState('initialState')

const data = JSON.parse(localStorage.getItem('login')) 

const validLogin =(e)=>{
    e.preventDefault()
  
    if(inpEmail.length !== 0 && inpPassword.length !== 0){
        var isValid =  data.find(e => e.email === inpEmail && e.password === inpPassword)
        if(isValid){
            props.history.push('/Home')
           
        }else {
            setisEmpty('is-invalid')  
            alert('check your informations ')
        }

    }else {
        
        setisEmpty('is-invalid')  
}}



    return (
        <div>
            <h1>Sign In</h1>
            <input className={`form-control m-3 w-50 ${isEmpty} } `} type='email' placeholder='email' value={inpEmail}  onChange={(e)=>{setinpEmail(e.target.value)}} />
            <input className={`form-control m-3 w-50 ${isEmpty} } `} type='password' placeholder='password' value={inpPassword}  onChange={(e)=>{setinpPassword(e.target.value)}} />
            <button type='submit' onClick={validLogin}  className='btn btn-success w-50  ml-5 mr-5'>register</button>
         </div>
    )
}

export default SignIn
