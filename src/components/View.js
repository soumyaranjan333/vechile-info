import React, { Component } from 'react'
import { connect } from "react-redux"
import {Link} from 'react-router-dom'

class View extends Component {

    handleClick=(id)=>{
         this.props.deleteVechile(id)
        // console.log(id)
    }

    handleClickSort=()=>{
        this.props.sortSales(this.props.vechileInfo)

    }
    

    render() {
        // console.log(this.props)
        const { vechileInfo } = this.props;
        console.log(vechileInfo)
        const vechileList = vechileInfo.length ? (
            vechileInfo.map(vechile => {
                return(      
                    <tbody key={vechile.id}>    
                        <tr> 
                            <td><Link to ={'/' + vechile.id} className='text-decoration-none'>{vechile.model_name}</Link> </td>  
                            <td>{vechile.vehchile_type}</td>
                            <td>{vechile.mileage}</td>
                            <td>{vechile.top_speed}</td>
                            <td>{vechile.cost}</td>
                            <td>{vechile.sales_units}</td>
                            <td onClick={()=>{this.handleClick(vechile.id)}} ><a className='text-danger' href='#'>X</a></td>    
                        </tr>
                    </tbody>
                       
                )
            })
        ) : (
            
            <div className="text-dark">No vechile to display. Please add a vechile</div>
        )
        return (
            <div className='container'>
                <table className="table table-dark table-hover ">
                    <thead>
                        <tr>
                            <th scope="col">Model Name</th>
                            <th scope="col">Vechile Type</th>
                            <th scope="col">Top Speed</th>
                            <th scope="col">Mileage</th>
                            <th scope="col">Cost</th>
                            <th onClick={this.handleClickSort} scope="col">Sales Units</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                {vechileList}
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    console.log(ownProps)
    return {
        vechileInfo: state.vechileInfo
    }
}

const mapDispatchToProps = (dispatch) =>{   
    return{   
        deleteVechile: (id) =>{ dispatch({type: 'DELETE_VECHILE', id:id})},
        sortSales: (vechile) =>{dispatch({type:'SORT_SALES', vechile})}
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return{
//         sortSales: (sales_units) =>{dispatch({type:'SORT_SALES', sales_units})}
//     }
// }

export default connect(mapStateToProps, mapDispatchToProps)(View)