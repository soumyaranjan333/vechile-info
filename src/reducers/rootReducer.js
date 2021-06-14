const initState={
    vechileInfo:[
        {id:'1' , model_name:'AUDI' , vehchile_type: 'SUV', mileage:"5km/lt", top_speed:'250km/hr', cost:'30lakh', sales_units: 4},
        {id:'2' , model_name:'BMW' , vehchile_type: 'Hatchback', mileage:"7km/lt",top_speed:'320km/hr', cost:'40lakh', sales_units: 2},
        {id:'3' , model_name:'Mercidez' , vehchile_type: 'SUV', mileage:"6km/lt", top_speed:'220km/hr', cost:'25lakh', sales_units: 6}
    ]
   
}
const rootReducer = (state = initState,action) =>{
    console.log(action) 
    switch(action.type){
    case "DELETE_VECHILE":
        let newVechileInfo= state.vechileInfo.filter(vechile=>{
            return action.id!==vechile.id
        })
        return{
            ...state,
            vechileInfo : newVechileInfo
        }
        case "ADD_VECHILE":
            action.vechile.id=Math.random();
            let vechileInfoAdd=[...state.vechileInfo,action.vechile]
            console.log(action,vechileInfoAdd)
        return{
            ...state,
            vechileInfo: vechileInfoAdd
        }
        case "SORT_SALES":
            // let vechileInfo = state.vechileInfo.sort((a,b)=>{
            //     // console.log(action)
            //     return a.sales_units - b.sales_units
            // })
            return{
                ...state,
                vechileInfo : state.vechileInfo.length>0 ?[...state.vechileInfo.sort((a,b)=>a.sales_units-b.sales_units)]:state.vechileInfo
                // vechileInfo:state.vechileInfo
            }
    }
    
    return state
}

export default rootReducer


// export default function (state = initialState, action) {
//     switch (action.type) {
//         case SORT_BY_FUNDED:
//             return {
//             ...state,
//             projects: state.projects.length > 0 ? [...state.projects.sort((a,b) => a.funded - b.funded)] : state.projects
//             };
//         default:
//             return state;
//     }
// }