import React, { Component } from 'react'
import { connect } from "react-redux"


class Add extends Component {
    state={   
        model_name:'',
        vehchile_type:'',
        mileage:'',
        top_speed:'',
        cost:'',
        sales_units:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();    
        // console.log(this.state)
        this.props.addVechile(this.state)
        // this.props.history.push('/')
        let form= document.getElementById('form')
        if(form.style.display=="none"){
            form.style.display="block"
        }else{
            form.style.display="none"
        }
    }
    
    render() {
        return (
            <div>
                
                <form className="row g-3" id="form" onSubmit={this.handleSubmit}>
                    <div className="col-md-6">
                        <label for="model_name" className="form-label">Model Name</label>
                        <input type="text" className="form-control" id="model_name" required onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="vehchile_type" className="form-label">Vechile Type</label>
                        <input type="text" className="form-control" id="vehchile_type" required onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="mileage" className="form-label">Mileage</label>
                        <input type="text" className="form-control" id="mileage" required onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="top_speed" className="form-label">Top Speed</label>
                        <input type="text" className="form-control" id="top_speed" required onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="cost" className="form-label">Cost</label>
                        <input type="text" className="form-control" id="cost" required onChange={this.handleChange}/>
                    </div>
                    <div className="col-md-6">
                        <label for="sales_units" className="form-label">Sales unit in FY20-21</label>
                        <input type="text" className="form-control" id="sales_units" required onChange={this.handleChange}/>
                    </div>   
                    <button type="submit" className="btn btn-info col-md-4 offset-md-4 justify-content-center">Login</button>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) =>{   
    return{   
        addVechile: (vechile) =>{ dispatch({type: 'ADD_VECHILE', vechile})}
    }
}

 export default connect(null,mapDispatchToProps)(Add)
