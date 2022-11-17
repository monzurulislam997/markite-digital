import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"


const useToken = (user) => {
    const [token, setToken] = useState("");

    const email = user?.user?.email

    useEffect(() => {
        // console.log(email);
        if (user) {
            (async () => {
                await fetch(`http://localhost:5000/user/${email}`, {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        email: user?.user?.email,
                    }),
                })
                    .then((res) => res.json())
                    .then(({ token }) => {
                        localStorage.setItem("accessToken", token);
                        setToken(token);
                    });
            })();
        }
    }, [user]);

    return [token]
}

export default useToken;









// import axios from "axios"
// import { useEffect } from "react"
// import { useState } from "react"


// const useToken = (user) => {
//     const [token, setToken] = useState("");
//     useEffect(() => {
//         if (user) {
//             (async () => {
//                 await fetch(`http://localhost:5000/login`, {
//                     method: "PUT",
//                     headers: { "Content-Type": "application/json" },
//                     body: JSON.stringify({
//                         uid: user?.user?.uid,
//                         email: user?.user?.email,
//                     }),
//                 })
//                     .then((res) => res.json())
//                     .then(({ token }) => {
//                         localStorage.setItem("accessToken", token);
//                         setToken(token);
//                     });
//             })();
//         }
//     }, [user]);


//     return [token]
// }

// export default useToken;