import React , {useState} from 'react'
import '../myCss.css'

function SignUp() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [nameError, setnameError] = useState('')
    const [lastnameError, setlastnameError] = useState('')
    const [emailError, setemailError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [checkdate, setCheckdate] = useState('')
    const [date, setdate] = useState('')
    const [colorInput, setcoloInput] = useState('')
    const [valid, setValid] = useState('')
    const [allSeted, setallSeted] = useState('')


    const yearNotValid =(yearin)=> {               // year is bigger than actual year and less then 1940
      var d = new Date(yearin).getFullYear()
      var now = new Date().getFullYear()
      if(d < 1940 || d > now -1){
        return true
      }}


      const colortest = (col,attribute)=>{              // test the color of input card 
         const val =  col ? ('is-valid') : ('is-invalid')
         return attribute.length !== 0 ? val : ''  
      
      }  



  const fromValidation =(e)=> {
    const emailRegex = /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    const passwordRegex  = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    
      
    if(e.target.placeholder === 'firstName'){
          if(e.target.value.length < 3 ) {
              setnameError('very short first name' && false)
              setallSeted(false)
                }
              else{
                setnameError(true)
                setallSeted(true)
          
          }
      }else if(e.target.placeholder === 'lastName'){
            if(e.target.value.length < 3 ) {
                setlastnameError('very short last name'&& false)
                setallSeted(false)

            }else{
              setlastnameError(true)
              setallSeted(true)
            }
        }
      
      else if(e.target.placeholder === 'email'){
            if(e.target.value.match(emailRegex) ) {
               setemailError(true)
               setallSeted(true)
            }else{
              setemailError('check your email' && false)
              setallSeted(false)
            }
        }else  if(e.target.placeholder === 'password'){
        
          if(e.target.value.match(passwordRegex)  ) {
            setpasswordError(true)
            setallSeted(true)
         }else{
           setpasswordError('check your password' && false)
           setallSeted(false)
         }
        }else if (e.target.placeholder ==='date') {
          if(e.target.value == '' || e.target.value == null || yearNotValid(e.target.value) ){
            setCheckdate('set your birth date please' && false)
            setallSeted(false)

          }else {
            setCheckdate(true)
            setallSeted(true)
            setdate(e.target.value)
          }
        }
        
        }
         
     const clickHandler =(e) => {
       e.preventDefault()
       if(nameError !== 'very short first name' && lastnameError !== 'very short last name' && emailError !== 'check your email' && passwordError !=='check your password' && checkdate !== 'set your birth date please' && allSeted == true  ){
          var tab = JSON.parse(localStorage.getItem('login'))  || []
          tab.push({firstName : firstName , lastName : lastName ,email:email ,password:password, date:date })
          localStorage.setItem('login',JSON.stringify(tab))
          
       }else{
        setValid('check your informations please !')

       }
     }


    return (
        <div>
            
            <form className="row">
                
                <div  className='card offset-sm-3 col-sm-6 mt-5'>
                  <div className="col-sm-12">
                    <h1 className="text-center text-primary pt-3 pb-3">sign up ☻</h1>
                  </div>
                  <div className="form-group">
                      <input className={`form-control ${colortest(nameError,firstName)}  col-sm-12`}type='text'  placeholder='firstName' value={firstName} onChange={(e)=>{setFirstName(e.target.value)}}  onKeyUp={fromValidation} />
                      <div className="invalid-feedback d-block">
                          {nameError}
                      </div>
                  </div>
               <div className='borderColor'></div> 
               
                <input className={`form-control m-3 w-50 ${colortest(lastnameError,lastName)}`} type='text' placeholder='lastName' value={lastName}  onChange={(e)=>{setLastName(e.target.value)}} onKeyUp={fromValidation} />
                <div className='borderColor'>{lastnameError}</div>
                <input className={`form-control m-3 w-50 ${colortest(checkdate,date)}`} type='date' placeholder='date' onKeyUp={fromValidation} value={date} onChange={(e)=>setdate(e.target.value) } />
                <div className='borderColor'>{checkdate} </div>
                <input className={`form-control m-3 w-50 ${colortest(emailError,email)}`} type='email' placeholder='email' value={email}  onChange={(e)=>{setEmail(e.target.value)}} onKeyUp={fromValidation}/>
                <div className='borderColor'>{emailError}</div>

                <input className={`form-control m-3 w-50 ${colortest(passwordError,password)}`} type='password' placeholder='password' value={password}  onChange={(e)=>{setPassword(e.target.value)}} onKeyUp={fromValidation}/>
                <div className='borderColor'>{passwordError}</div>

                <button type='submit' className='btn btn-success w-50   ml-5 mr-5' onClick={clickHandler}>register</button>
                <div className='borderColor'>{valid} </div>
            </div>
            </form>
        </div>
    )
}

export default SignUp
