import { async } from "@firebase/util";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useSignUp =async(email, password)=>{ 
const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
] = useCreateUserWithEmailAndPassword(auth);


 await createUserWithEmailAndPassword(email, password)
 return [user,loading,error]


}

export default useSignUp;