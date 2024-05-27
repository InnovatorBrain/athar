// import React, { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import axios from 'axios';
// import SplashScreen from './components/SplashScreen/SplashScreen';

// const PrivateRoutes = () => {
//     const [loading, setLoading] = useState(true);
//     const [authenticated, setAuthenticated] = useState(false);

//     useEffect(() => {
//         const checkAuthentication = async () => {
//             const token = localStorage.getItem('accessToken');
//             if (token) {
//                 axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//                 try {
//                     await axios.get('');
//                     setAuthenticated(true);
//                 } catch (error) {
//                     console.error('Token validation failed', error);
//                     setAuthenticated(false);
//                 }
//             } else {
//                 setAuthenticated(false);
//             }
//             setLoading(false);
//         };

//         checkAuthentication();
//     }, []);

//     const handleSignInReload = () => {
//         window.location.href = "/SignIn";
//         // window.location.reload();
//     };

//     if (loading) {
//         return <SplashScreen />;
//     }

//     return authenticated ? <Outlet /> : handleSignInReload();
// };

// export default PrivateRoutes;