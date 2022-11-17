import React, { Component } from 'react'
import Child from '../Child/Child';

export default class Parent extends Component {
    state = {
      products : [
      {id:1 , name:'iphone' , price: 15000 , onSale:true},
      {id:2 , name:'lenovo', price: 10000 , onSale:false},
      {id:3 , name:'toshiba', price: 25000 , onSale:false},
      {id:4 , name:'samsung', price: 20000 , onSale:true},
      {id:5 , name:'htc', price: 20000 , onSale:true},
      {id:6 , name:'samsung', price: 18000 , onSale:false},
      {id:7 , name:'samsung note', price: 13000 , onSale:true},
      {id:8 , name:'iphone12', price: 12000 , onSale:false},
      {id:9 , name:'opo', price: 11000 , onSale:true},

      ]
    };

    deleteProduct =(id) => {
      console.log('delete');
      let currentProd =[...this.state.products]
      currentProd = currentProd.filter(product => product.id != id)
      this.setState({products:currentProd})
    }
    updateProduct =(id) => {
      console.log('update');
      let currentProd =[...this.state.products]
      currentProd.map(product => {
        if (product.id ==id)
        {
          product.price++
        }
        return product;
      })
      this.setState({products:currentProd})

    }


    render() {
    return <>
    <div className='container '>
    <div className='row py-2 gy-3'>
      {
  this.state.products.map ((product , index)=> <Child key={index} productInfo = {product} deleteProd={this.deleteProduct} updateProd={this.updateProduct} /> )
        
      }
    </div>
    </div>
    </>
  }
}