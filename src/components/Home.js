import React from 'react'
import {Link} from 'react-router-dom'
export default function Home(){
    
    return (
        <>
        <div>
        <br/>
        <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{color: 'blueviolet'}}>Welcome to Blue Ocean</h1>
            <br/>
            <br/>
            <div className="container">
                <div className="row">

                <div className="col-md 6">
                <Link to="/reception">
                        <button className="btn btn-outline-info">
                            To Reception
                        </button></Link>
                    </div>

                    <div className="col-md 6">
                    <Link to="/kitchen">
                        <button className="btn btn-outline-info">
                            To Kitchen
                        </button></Link>
                    </div>

                </div>
            </div>
        </div>
        </>
    )
}