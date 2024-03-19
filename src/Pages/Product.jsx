import React from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card'

const Product = (props) => {
    const img3 = 'https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img2 = 'https://media.istockphoto.com/id/172417586/photo/elegant-black-leather-shoes.jpg?b=1&s=612x612&w=0&k=20&c=L2Qpr_C2v2FLBbn2pHRkH7MVO-MaHq-Rdi4AORIwmlE='
    const img1 = 'https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600'
    const img5 ='https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/8886462/1.jpg?6623'
    const img4 = 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img6 = 'https://images.pexels.com/photos/267320/pexels-photo-267320.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img7 = 'https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img8 = 'https://images.pexels.com/photos/2530912/pexels-photo-2530912.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img9 = 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=600'
    const img10 = 'https://media.istockphoto.com/id/1337191336/photo/black-fashion-sport-shoe-on-white-background.jpg?b=1&s=612x612&w=0&k=20&c=XoDOiSP0-CUGJYVihWg5iDu-MlyNeHK6IUYxFQc6_zw='


  return (
    <div>
        <Navbar />
    <div className="d-flex ">
        <Card image ={img1} name='Niki' description='Alpha male' price={1600} />
        <Card image ={img2} name='puma' description='Black leandder' price={1250} />
        <Card image ={img5} name='Fathers' description='Honour is soul' price={600} />
        <Card image ={img3} name='dummy' description='dummy description' price={600} />
        <Card image ={img4} name='dummy' description='dummy description' price={600} />

    </div>

    <div className="d-flex">
        <Card image ={img6} name='dummy' description='dummy description' price={600} />
       <Card image ={img7} name='dummy' description='dummy description' price={600} />
        <Card image ={img8} name='dummy' description='dummy description' price={600} />
        <Card image ={img9} name='dummy' description='dummy description' price={600} />
        <Card image ={img10} name='dummy' description='dummy description' price={600} />
        
    </div>
    </div>
  )
}

export default Product