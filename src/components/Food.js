import React, {useState} from 'react';

export default function Food({category, addOrder, tables}){

    const[showMenu, setShowMenu] = useState(false)
    const[quantity, setQuantity] = useState(1)
    const[table, setTable] = useState(1)

    return (
            <div key={category.id}>
                <h4>{category.name}</h4>
                    
                    {showMenu? <button onClick={() => setShowMenu(false)} className="btn btn-sm rounded-pill btn-outline-warning">Close Menu</button> : <button onClick={() => setShowMenu(true)} className="btn btn-sm rounded-pill btn-outline-warning">Show Menu</button>}
                    {showMenu? (
                        <>
                        {
                            category.menuSet.map(food => (
                                <div key={food.id}>
                                    <hr />
                                    <div className="bg-primary">
                                        <>{food.name}    ............................................   ksh-{food.price}
                                        
                                        <div style={{paddingBottom: '5px', marginBottom: '5px', margin: 'start'}}>
                                             quantity:  <input className="sm rounded" type="number" onChange={(e)=>{
                                                  setQuantity(e.target.value)
                                                  
                                             }}/>
                                        </div> 
                                        
                                        <div style={{paddingBottom: '5px', marginBottom: '5px', margin: 'start'}}>
                                            <select name="table" required className="rounded-pill">
                                                {
                                                    tables.map(meza => (
                                                        <option onChange={(e)=> setTable(e.target.value)} key={meza.id} value={meza.id}>{meza.name}</option>
                                                    ))
                                                }
                                            </select>
                                        </div>
                                        
                                        <button style={{paddingBottom: '5px', marginBottom: '5px'}} className="btn float-right btn-success btn-sm rounded-pill" onClick={() => {
                                            addOrder(food.name, food.price, quantity, table)
                                            setQuantity(1)
                                            setTable(1)
                                        }}>add to Order </button>  </>
                                    </div>


                                </div>
                            ))
                        }
                        </>
                    ) : <></>}
                <hr />
            </div>
    )
}