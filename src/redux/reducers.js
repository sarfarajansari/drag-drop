import { combineReducers } from "redux";
import WheelData from "./wheeldata";
import POData from "./poData";

export const POReducer = (state = POData, action) => {
  switch (action.type) {
    case "SETPO":
      state = action.payload;
      return state;
    case "REMOVEPO":
      return state.filter((item,i)=>i!==action.payload);
    default:
        return state;
  }
};
export const WheelReducer = (state = WheelData, action) => {
  switch (action.type) {
    case "DROP":
      let changed = false;
      return(
        state.map((wheel, i) =>{
          if(i===action.payload.objIndex){
            return wheel.map((obj)=>{
              if(!obj.value && !changed){
                changed = true;
                return({
                  ...obj,
                  value:true,
                  po:action.payload.num
                })
              }

              else{
                return obj
              }
            })
          }
          else{
            return wheel;
          }
        })
      )
      // return( state[].map((obj)=>{
      //   if(!obj.value){
      //     obj.value=true ;
      //     obj.po=action.payload.num ;
      //   }
      // }))
      
    default:
        return state;
  }
};

const allReducers = combineReducers({
  PONumber: POReducer,
  wheel: WheelReducer,
});

export default allReducers;
