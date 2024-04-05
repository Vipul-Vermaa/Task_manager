import {createSlice} from '@reduxjs/toolkit'
import  axios  from 'axios';

const initialUser = localStorage.getItem('auth')
	? JSON.parse(localStorage.getItem('auth'))
	: null;

const initialState={
    isLoading:false,
    isAuthenticated:false,
    currentUser:initialUser,
    error:null,
}
export const authSlice=createSlice({
    name:'auth',
    initialState:initialState,
    reducers:{
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.isAuthenticated=true;
            state.isLoading=false
        },
        loginFailure:(state,action)=>{
            state.isAuthenticated=false;
            state.error=action.payload
        },
        registerSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.isLoading=false
        },
        registerFailure:(state,action)=>{
            state.error=action.payload
        },
        logoutSuccess:(state)=>{
            state.currentUser=null            
        },
        
    }
})

export const {loginSuccess,loginFailure,registerSuccess,registerFailure,logoutSuccess}=authSlice.actions

export default authSlice.reducer


export const register=(user)=>async(dispatch)=>{
try {    
    const config={
        headers:{
            'Content-type':'application/json',
        }
    }
    const response=await axios.post(
        `http://localhost:4000/auth/register`,user,config
    )
    if(response){
        dispatch(registerSuccess(response.data))
    }
    else{
        dispatch(registerFailure())
    }
} catch (error) {
    dispatch(registerFailure())
}
}


export const login = (user) => async (dispatch) => {
	console.log(user);
	try {
		const userData = {
			email: user.email,
			password: user.password,
		};
		const response = await axios.post(
		    `http://localhost:4000/auth/login`,
			userData
		);
		if (response) {
			localStorage.setItem('auth', JSON.stringify(response.data));
			dispatch(loginSuccess(response.data));
			window.location.reload();
		} else {
			dispatch(loginFailure());		
		}
	} catch (error) {
		dispatch(loginFailure());
	}
};