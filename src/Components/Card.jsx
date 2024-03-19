import React from 'react'
import { IoStarSharp } from "react-icons/io5";
import { FaCat } from "react-icons/fa";

const Card = (props) => {
  return (
    <>
     <div class="card" style={{width: "15rem"}}>
        <img src= {props.image} style={{height: '200px'}}/>
        <div class="card-body">
        <h5 class="card-title">{props.name}</h5>
        <div style={{height: '100px'}}>
        <p class="card-text">{props.description}</p>
        <p className="card-text">${props.price} </p>
        </div>
        <div className="mb-4  d-flex justify-content-between mx-1" >
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
        <IoStarSharp />
    </div>

    <a href="#" class="btn btn-primary w-100"><FaCat /> Add To Cat </a>
  </div>
</div>
    </>
  )
}

export default Card