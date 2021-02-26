import React, {useState} from 'react';
import Food from './Food.js'

export default function Reception({menu, tables, getOrder}){

    const[order, setOrder] = useState([])

    const addOrder = (name, price, quantity, table) => {
        const newPrice = quantity * price
        const id = Math.random()
        console.log(id)
        const newOrder = {id: id, name: name, price: newPrice, quantity: quantity, table: table}
        setOrder(order => [...order, newOrder])
    }

    const delOrder = (id) => {
        setOrder(order => [...order.filter(order=> order.id !== id)])
    }

    const orderSetter = () => {
        getOrder(order)
        setOrder([])
    }


    return (
        <>
        <br />
        <div className="container-fluid">
           <div  className="row">

                <div className="col-md-7">
                    <div className="card card-body">
                        <div className="bg-info">
                            <h3 className="card-title">Menu</h3>
                        </div>
                        <br/>

                        <div>
                            {
                                menu.map(category => (
                                  <Food category={category} addOrder={addOrder} tables={tables} key={category.id} />
                                ))
                            }
                        </div>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="card card-body">
                        <h3 className="card-title"> Order</h3>
                        <hr/>
                        <div>
                            {
                                order.map((order) => (
                                    <div key={order.id}>
                                        <p>{order.name} x {order.quantity} ...  price: {order.price} ... Cancel Order: <button className="btn btn-danger rounded-pill" onClick={() => delOrder(order.id)}>x</button></p>
                                        <hr/>
                                    </div>
                                ) )
                            }
                            <button className="btn btn-success btn-sm rounded-pill" onClick={()=>orderSetter()}>Send Order</button>
                        </div>
                    </div>
                </div>
           </div>
        </div>
        </>
    )
}