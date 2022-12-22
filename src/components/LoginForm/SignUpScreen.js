// import React, { useRef } from 'react';
// import './SignInScreen.css';
// import { Auth } from '../../config/firebase';

// const SignUpScreen = () => {
//   //Chưa học useRef
//   const emailRef = useRef(null);
//   const passwordRef = useRef(null);

//   const register = (e) => {
//     // chặn hoạt động mặc định của trình duyệt
//     e.preventDefault();
//     // xác thực khi đăng ký
//     Auth.createUserWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
//       .then((authUser) => {
//         console.log(authUser);
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//   };

//   return (
//     <div className="signInScreen">
//       <form>
//         <h1>Đăng ký thành viên</h1>
//         <input ref={emailRef} placeholder="Email" type="email"></input>
//         <input ref={passwordRef} placeholder="Password" type="password"></input>
//         <button type="submit" onClick={register}>
//           Đăng ký ngay
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpScreen;
