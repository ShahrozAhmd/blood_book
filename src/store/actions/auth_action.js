import * as actionType from './action_types'

 const signInWithEmail = (email,password) =>{
    return{
        type:actionType.SIGN_IN_WITH_EMAIL,
        payload:{
            email:email,
            password:password,
        }
    }
}

const signUpWithEmail = (email,password) =>{
    return{
        type:actionType.SIGN_UP_WITH_EMAIL,
        payload:{
            email:email,
            password:password,
        }
    }
}



export{signInWithEmail,signUpWithEmail}