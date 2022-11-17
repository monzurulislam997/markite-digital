import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import img from '../../assets/image/signup.gif'
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import axios from 'axios';
import Loadder from '../Lodder/Loadder';

const SignupCustomer = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()
    const [token] = useToken(user)


    if (loading) {
        return <Loadder></Loadder>
    }

    // console.log(user?.user?.displayName);
    // console.log(user?.user?.user)
    // console.log(user);
    const onSubmit = async (data) => {
        await createUserWithEmailAndPassword(data.email, data.password);
        const customerData = {
            role: "customer",
            email: data.email,
            name: data.displaName,

        };

        axios.put(`http://localhost:5000/user/${data.email}`, customerData);
        await updateProfile({ displayName: data.displayName });
        toast.success(
            `Welcome ${data.displayName}! You are now registered.`
        );

    };



    if (token) {
        navigate('/')
    }



    return (
        <div className='py-20'>
            <div className="hero -mt-16  min-h-screen ">
                <div className="hero-content w-full flex-col lg:flex-row ">
                    <div className="text-center w-1/2 h-72 lg:text-left">
                        <img src={img} className="h-80  w-3/4" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div>
                            <div className="card-body">
                                <h1 className="text-xl md:text-2xl text-center font-bold">Register now! Customer </h1>
                                <h1> Already Have An Account?<Link to="/login" className='text-md font-bold rounded-md text-indigo-700  '>Please, Log In </Link> </h1>
                                <form onSubmit={handleSubmit(onSubmit)}>     {/* name input */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("displayName", {
                                            required: {
                                                value: true,
                                                message: "Name is required"
                                            },
                                            minLength: 4,

                                            pattern: {
                                                value: /^[a-z ,.'-]+$/i,
                                                message: 'Name is not valid',
                                            }
                                        }
                                        )} placeholder="name" className="input input-bordered" />
                                        {errors.displayName?.type === 'required' && <span className='text-red-500'>{errors.displayName.message}</span>}
                                        {errors.displayName?.type === 'pattern' && <span className='text-red-500'>{errors.displayName.message}</span>}
                                        {errors.displayName?.type === 'minLength' && <span className='text-red-500'>Minimum 4 characters needed.</span>}
                                    </div>

                                    {/* email */}
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" {...register("email", {
                                            required: {
                                                value: true,
                                                message: "Email is required"
                                            },
                                            pattern: {
                                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                                message: "Email is not Valid"
                                            }
                                        })}
                                            placeholder="email" className="input input-bordered" />
                                        {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
                                        {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
                                    </div>

                                    {/* <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Catagory</span>
                                        </label>
                                        <select    {...register("select")}

                                            className="select select-bordered text-slate-600 font-thin w-full max-w-xs">

                                            <option>HTML+ CSS</option>
                                            <option>HTML, CSS, JavaScript</option>
                                            <option>React, JavaScript</option>
                                            <option>Laravel, PHP</option>
                                        </select>


                                    </div> */}

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" placeholder="password" className="input input-bordered"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required"
                                                },
                                                pattern: {
                                                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                                                    message: "Password must be at least 8 characters, contain at least one letter and one number"
                                                }
                                            })}

                                        />

                                        <label className="label">
                                            <p className="text-red-500 text-sm">{errors.password?.message}</p> </label>
                                    </div>
                                    <label className="label">
                                        <a href="https://google.com" className="label-text-alt link text-sm link-hover">Forgot password?</a>
                                    </label>



                                    <div className="form-control mt-6">
                                        <input type='submit' value="Sign Up" className="btn btn-primary"></input>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >


    );
};

export default SignupCustomer;































// import React from 'react';
// import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
// import { useForm } from 'react-hook-form';
// import { Link, useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import img from '../../assets/image/signup.gif'
// import auth from '../../firebase.init';
// import useToken from '../../hooks/useToken';
// import axios from 'axios';

// const SignupCustomer = () => {
//     const { register, formState: { errors }, handleSubmit } = useForm();
//     const [updateProfile, updating] = useUpdateProfile(auth);
//     const [
//         createUserWithEmailAndPassword,
//         user,
//         loading,
//         error,
//     ] = useCreateUserWithEmailAndPassword(auth);

//     const navigate = useNavigate()
//     const [token] = useToken(user)


//     const onSubmit = async (data) => {
//         await createUserWithEmailAndPassword(data.email, data.password);
//         const hrData = {
//             role: "hr",
//             email: data.email,
//             name: data.displaName,

//         };
//         axios.put(`http://localhost:5000/login`, hrData);
//         await updateProfile({ displayName: hrData.displayName });
//         toast.success(
//             `Welcome ${hrData.displayName}! You are now registered as a Hr Manager.`,
//             {
//                 position: "top-center",
//             }
//         );
//         navigate('/')
//     };



//     if (token) {
//         navigate('/')
//     }



//     return (
//         <div className='py-20'>
//             <div className="hero -mt-16  min-h-screen ">
//                 <div className="hero-content w-full flex-col lg:flex-row ">
//                     <div className="text-center w-1/2 h-72 lg:text-left">
//                         <img src={img} className="h-80  w-3/4" alt="" />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div>
//                             <div className="card-body">
//                                 <h1 className="text-xl md:text-2xl text-center font-bold">Register now! Customer </h1>
//                                 <h1> Already Have An Account?<Link to="/login" className='text-md font-bold rounded-md text-indigo-700  '>Please, Log In </Link> </h1>
//                                 <form onSubmit={handleSubmit(onSubmit)}>     {/* name input */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Name</span>
//                                         </label>
//                                         <input type="text" {...register("displayName", {
//                                             required: {
//                                                 value: true,

//                                                 message: "Name is required"
//                                             },
//                                             minLength: 4,


//                                             pattern: {
//                                                 value: /^[a-z ,.'-]+$/i,
//                                                 message: 'Name is not valid',
//                                             }
//                                         }
//                                         )} placeholder="name" className="input input-bordered" />
//                                         {errors.displayName?.type === 'required' && <span className='text-red-500'>{errors.displayName.message}</span>}
//                                         {errors.displayName?.type === 'pattern' && <span className='text-red-500'>{errors.displayName.message}</span>}
//                                         {errors.displayName?.type === 'minLength' && <span className='text-red-500'>Minimum 4 characters needed.</span>}
//                                     </div>

//                                     {/* email */}
//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Email</span>
//                                         </label>
//                                         <input type="email" {...register("email", {
//                                             required: {
//                                                 value: true,
//                                                 message: "Email is required"
//                                             },
//                                             pattern: {
//                                                 value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
//                                                 message: "Email is not Valid"
//                                             }
//                                         })}
//                                             placeholder="email" className="input input-bordered" />
//                                         {errors.email?.type === 'required' && <span className='text-red-500'>{errors.email.message}</span>}
//                                         {errors.email?.type === 'pattern' && <span className='text-red-500'>{errors.email.message}</span>}
//                                     </div>

//                                     {/* <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Catagory</span>
//                                         </label>
//                                         <select    {...register("select")}

//                                             className="select select-bordered text-slate-600 font-thin w-full max-w-xs">

//                                             <option>HTML+ CSS</option>
//                                             <option>HTML, CSS, JavaScript</option>
//                                             <option>React, JavaScript</option>
//                                             <option>Laravel, PHP</option>
//                                         </select>


//                                     </div> */}

//                                     <div className="form-control">
//                                         <label className="label">
//                                             <span className="label-text">Password</span>
//                                         </label>
//                                         <input type="password" placeholder="password" className="input input-bordered"
//                                             {...register("password", {
//                                                 required: {
//                                                     value: true,
//                                                     message: "Password is required"
//                                                 },
//                                                 pattern: {
//                                                     value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
//                                                     message: "Password must be at least 8 characters, contain at least one letter and one number"
//                                                 }
//                                             })}

//                                         />

//                                         <label className="label">
//                                             <p className="text-red-500 text-sm">{errors.password?.message}</p> </label>
//                                     </div>
//                                     <label className="label">
//                                         <a href="https://google.com" className="label-text-alt link text-sm link-hover">Forgot password?</a>
//                                     </label>



//                                     <div className="form-control mt-6">
//                                         <input type='submit' value="Sign Up" className="btn btn-primary"></input>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div >


//     );
// };

// export default SignupCustomer;






