import { useEffect } from "react"


const initialeState = {
    image :'',
    name:'',
    categorie :'' ,
    description : ''
}


    //     var data = JSON.parse(localStorage.getItem('car')) || []
    //        console.log(data)
    //        data.map((item)=>{
    //            return{
    //                ...data,
    //             image : item.image,
    //             name : item.name,
    //             categorie : item.categorie,
    //             description : item.description,
    //           } 
    //        })
       
           
    //    }, []) 


const CarsReducer =(state = initialeState, action) => {
    var data = JSON.parse(localStorage.getItem('car')) || []

   switch(action.type){
       case 'SHOW_CAR' : return {
                
            }
        default : return state
       }       

     
        
   
    }
export default CarsReducer