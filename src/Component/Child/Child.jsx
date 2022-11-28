import React, { Component } from 'react'

export default class Child extends Component {
    state = {};
    render() {
      console.log(this.props);
      let {id , name , price ,onSale} = this.props.productInfo
    return <>
      <div className="col-md-3 ">
        <div className="product  bg-info text-center card py-2">
        <h5>id :{id}</h5>
        <h3>Name : {name}</h3>
        {/* <h3>{price}</h3> */}
        {price >=15000? <h3 className="text-light">{price}</h3> : <h3>{price}</h3>}

      {onSale&&<p className='fs-3 fw-bold text-danger'>sale{onSale}</p>}
      <button onClick={()=>this.props.deleteProd(id)} className='btn btn-outline-danger my-4 '>Delete</button>
      <button onClick={()=>this.props.updateProd(id)} className='btn btn-outline-warning  '>Update</button>
      </div>
      </div>
    {/* <h2>Child</h2>
    <i className='fa fa-home'></i> */}
    </>
  }
}