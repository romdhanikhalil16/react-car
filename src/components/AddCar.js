import React, { useState } from 'react'
import empty from '../empty.jpg'
import {connect} from 'react-redux'



function AddCar() {
    
const [image, setImage] = useState('')
const [name, setName] = useState('')
const [categorie, setCategorie] = useState('')
const [description, setDescription] = useState('')

 const   importImage =(e)=>{

    let files = e.target.files
    if(files.length == 0){
        return;
    }
    const selectedFile = files[0]
        setImage(selectedFile.name)

    const preview = document.querySelector('img')
    const reader = new FileReader()

    reader.addEventListener('load',function(){
        preview.src = reader.result
    })

    reader.readAsDataURL(selectedFile)

    }

    

    const store = () => {
        var tab = JSON.parse(localStorage.getItem('car')) || [];
            tab.push({name : name , categorie : categorie , image : image , description : description})

        localStorage.setItem('car',JSON.stringify(tab))

    }



    return (
        <div className='pictureAdd' >
         <h1>AddCar</h1> 
         <form onSubmit={store} >
             <input className="form-control m-3 w-50 " type='text' value={name} onChange={(e)=>setName(e.target.value)}  placeholder="car's name"/>
             <input className="form-control m-3 w-50" type='text' value={categorie} placeholder="categorie" onChange={(e)=>setCategorie(e.target.value)}/>
             <input type='file' id='inputFile' onChange={importImage} /> <br/>
             <img src={empty} id='image' width= '371px' height= '259px'  />
            <textarea  placeholder='Car description' className="input-group-text mt-3 " rows='10' cols='50' value={description } onChange={(e)=>setDescription(e.target.value)} /><br/>
             <button type='submit' className='btn btn-primary btn-lg active '  >Add </button>
             
        </form>  
        </div>
    )
}



export default AddCar
