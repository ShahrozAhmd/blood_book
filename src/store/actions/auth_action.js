import * as actionType from './action_types'

export const signIn = (email,password) =>{
    return{
        type:actionType.SIGNIN,
        payload:{
            email:email,
            password:password,
        }
    }
}

export const signUp = (email,password) =>{
    return{
        type:actionType.SIGNUP,
        payload:{
            email:email,
            password:password,
        }
    }
}