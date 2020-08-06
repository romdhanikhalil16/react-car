import React, { useEffect } from 'react'
import CarReducer from '../redux/Cars/CarsReducer'
import {connect} from 'react-redux'
import {showCar} from '../redux/Cars/CarsActions'

function Home(props) {
  console.log(props)  
  return (
        <div>
          <h3>BMW {props.name}</h3>  
          <h6>categorie</h6> 
          <p>image</p>
          <p>description</p>
          <ul>
           {/* { props.map((item)=>{
             return (
               <li> {item.name} </li>
             )
           })} */}
          </ul>
        </div>
        //  <div ></div>
    )
}


const mapStateToProps = (state) => {
  // console.log(state)
  return {
    name  : state.car.name
  }
}
const mapDispatchTopProps =(dispatch) =>{
  return{
    showCar : ()=> {dispatch(showCar())}
  }
}

export default connect(mapStateToProps,mapDispatchTopProps)(Home) 
