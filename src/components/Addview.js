import React from 'react'
import {Link,NavLink} from 'react-router-dom'

const Addview = () => {
    return (
        <div className='my-5'>
            <button type="button" class="btn btn-warning btn-lg"><Link to="/" className="text-decoration-none text-dark fw-bold">Go to Home</Link></button>
            <button type="button" class="btn btn-success btn-lg"><Link to="/add" className="text-decoration-none text-dark fw-bold">Add a vechile</Link></button>
            <button type="button" class="btn btn-danger btn-lg"><Link to="/view" className="text-decoration-none text-dark fw-bold">View Vechiles</Link> </button>
        </div>
    )
}

export default Addview