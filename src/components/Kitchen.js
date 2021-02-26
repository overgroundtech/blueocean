import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function Kitchen(){
    const[order, setOrder] = useState([])

    useEffect(()=>{
        axios.post('graphql', {
            query: `
            {
                allOrders{
                  id
                  food
                  amount
                  table{
                    name
                  }
                  status
                }
              }
            `,
        }).then(res => {
            setOrder(res.data.data.allOrders)
        }).catch(err => console.log(err))
    })

    const serve = (_id) => {
        axios.post('graphql', {
            query: `
            mutation($id: Int!){
                serve(id: $id){
                  order{
                    status
                  }
                }
              }
            `,
            variables: {
                id: _id
            }
        }).then(res => console.log(res))
        .catch(err => console.log(err))
    }

    return (
        <>
        <div className="container bg-light">
            <h2>Kitchen</h2>
            <div className="card card-body bg-info">
                <h4 className="card-title">recieved Orders</h4>
                <hr/>
                <br/>
                {
                    order.map(order => (
                        <div key={order.id}>
                            <p>{order.food} x {order.amount} for {order.table.name}   <button onClick={()=>serve(order.id)} className="btn btn-danger"> served </button>  </p>

                            <hr/>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}