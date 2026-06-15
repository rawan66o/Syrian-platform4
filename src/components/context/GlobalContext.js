import React, { createContext, useContext, useReducer } from 'react'
import AppReducer from './AppReducer';
const initialState={
    user:null,
    isLoggedIn:false,
};


//انشاء ال context
const GlobalContext=createContext();





export const GlobalProvider = ({children}) => {
    const[state,dispatch]=useReducer(AppReducer,initialState);
  return (
    /* state,dispatch هون عم قلو خلي كل التطبيق يوصل لهدول*/
    /* يعني عم نمرر : user,isloggedin,dispatch*/
    /* كتبت ...state اختصار لل user:state.user , isLoggedIn:state.isLoggedIn*/
      <GlobalContext.Provider value={{...state,dispatch}}>
        {children}
      </GlobalContext.Provider>
   
  )
}
//هاد hook جاهز يعني بدل ما نكتب (usecontext)منكتب هاد ال hook
export const useAuth=()=>{
    return useContext(GlobalContext);
}