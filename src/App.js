import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import axios from 'axios';
import './App.css';
import Navbar from './components/Nav.js';
import Kitchen from './components/Kitchen.js';
import Reception from './components/Reception.js'
import Home from './components/Home'

function App() {
  
  const[menu, setMenu] = useState([])
  const[tables, setTables] = useState([])
  const[gOrder, setGOrder] = useState([]) 

  const sendBack = (order) => {
    order.forEach(item => {
      axios.post('graphql', {
        query: `
        mutation($amount: Int! $food: String! $price: Int! $tableId: Int!){
          createOrder(amount: $amount food: $food price: $price tableId: $tableId){
            order{
              id
            }
          }
        }
        `, 
        variables: {
          amount: item.quantity,
          food: item.name,
          price: item.price,
          tableId: item.table
        }
      }).then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    })
  }
  const getOrder = order =>{
    sendBack(order)
    order.forEach(food => {
      setGOrder(gOrder=> [...gOrder, food])
    });
  }

  const getMenu = () => {
    axios.post('graphql', {
      query:  `
      {
        allCategories{
          id
          name
          menuSet{
            id
            name
            price
          }
        }
      
      allTables{
        id
        name
      }
    }
      `
    }).then(res => {
      setMenu(res.data.data.allCategories)
      setTables(res.data.data.allTables)
    }).catch(error => {
      console.log(error)
    })
  }

  useEffect( () => {
    getMenu()
  }, []);

  return (
    <div className="App">
      <Router>
      <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/kitchen" component={() => <Kitchen order={gOrder} setOrder= {setGOrder}/>} />
        <Route exact path="/reception" component={() => <Reception menu={menu} tables = {tables} getOrder={getOrder}/>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
