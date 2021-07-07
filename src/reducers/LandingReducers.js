const INIITIAL_STATE = {
    value:9,
};


export default function LandingReducers (state = INIITIAL_STATE,action){
    console.log(action,"action")
    switch(action.type){
        case "increment":
            return {
                value:action.payload,
            };
        default:
            return state;
    }
}
