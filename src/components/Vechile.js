import React, { Component } from 'react'
import {connect} from 'react-redux'

class Vechile extends Component {

    render() {
        console.log(this.props.vechile)
        const vechile =this.props.vechile ? (
            <div>
                <h4>Model Name: {this.props.vechile.model_name}</h4>
                <h4>Vechile Type: {this.props.vechile.vehchile_type}</h4>
                <h4>Mileage: {this.props.vechile.mileage}</h4>
                <h4>Top Speed: {this.props.vechile.top_speed}</h4>
                <h4>Cost: {this.props.vechile.cost}</h4>
                <h4>Sales in unit for FY20-21: {this.props.vechile.sales_units}</h4>
            </div>
        )
        :(
            <div>Loading Data....</div>
        )
        return (
            <div>
                <span>{vechile}</span>
            </div>
        )
    }
}

const mapStateToProps=(state,ownProps)=>{
    console.log(state,ownProps)
    let id= ownProps.match.params.id;
    console.log(id)
    return{
        vechile: state.vechileInfo.find(vechile=>{
            return vechile.id==id
        })
    }
}


export default connect(mapStateToProps)(Vechile)

