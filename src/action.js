import { SUBMIT} from "./actionTypes";

export default function submitAction(data){
    console.log(data);
    return {
        type : SUBMIT,
        payload : data
    };
}