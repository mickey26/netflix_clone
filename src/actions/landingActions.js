export const Inc = (data) => {
    console.log(data,"data in action");
    return(dispatch) => {
         dispatch({type:"increment",payload:data+1});
    }
}