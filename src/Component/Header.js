import React from 'react'
import { FaMobile } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaHouseChimney } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";


const Header = () => {

    return (
        <div className=''>
            {/* 
            <div className='container'>
                <div className='row'>

                    <div className='col-sm-6' style={{ width: '40%' }}>
                        <div className=''>
                            <div className='h-40 w-full bg-white'>
                                <div className=''>
                                    <img src="../../Images/yojna-main.jpg" style={{ height: "65px" }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 ms-auto" style={{ width: '40%' }}>
                        <div style={{ marginTop: 5, marginBottom: 5 }}>
                            <ul className="list-unstyled text-end">
                                <li>
                                    <FaMobile />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <a href="tel:9811750130" className="text-decoration-none">
                                        +91 9811-750-130
                                    </a>
                                    /<a href="tel:8527134491" className="text-decoration-none">8527134491</a>
                                </li>
                                <li>
                                    <MdOutlineEmail />&nbsp;&nbsp;
                                    <a href="mailto:info@shoppingcomplexdelhi.com" className="text-decoration-none">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        info@shoppingcomplexdelhi.com
                                    </a>
                                </li>
                                <li>
                                    <FaHouseChimney />&nbsp;&nbsp;&nbsp;
                                    <a href="https://www.delhishoppingcomplex.com" className="text-decoration-none">
                                        <i className="fa fa-home" aria-hidden="true" />
                                        Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                    <span className='animate'>
                                        <FaUserCircle />&nbsp;&nbsp;
                                        <a href="#" className="text-decoration-none inline-flex items-center animate-blink">
                                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                                            <span>Registration Closed</span>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div> */}
            <div className='container-fluid'>
                <div className="row">
                    <div className='col-6 '>
                        <div className='px-lg-4'>
                            <div className='h-40 w-full bg-white px-lg-5'>
                                <div className='text-start px-lg-5'>
                                    <img src="../../Images/yojna-main.jpg" style={{ height: "65px", maxWidth: "100%" }} /> {/* Added maxWidth: "100%" */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 px-10">
                        <div style={{ marginTop: 5, marginBottom: 5 }} >
                            <ul className="list-unstyled text-sm-start"> {/* Added text-sm-start class */}
                                <li className=' ps-lg-5 d-flex justify-content-center pt-3 '>
                                    <FaMobile className='d-none d-sm-block 'size={20}/>
                                    <a href="tel:9811750130" className="text-decoration-none ">
                                        +919811750130
                                    </a>
                                   <span className='d-none d-sm-block   '>/</span><a href="tel:9811750130" className="text-decoration-none d-none d-sm-block  ">
                                        +91 9811750130
                                    </a>
                            
                                </li>
                                <li className='d-none d-sm-block text-center ps-5'>
                                    <MdOutlineEmail className='' />&nbsp;&nbsp;
                                    <a href="mailto:info@shoppingcomplexdelhi.com" className="text-decoration-none">
                                        <i className="fa fa-envelope " aria-hidden="true" />
                                        info@shoppingcomplexdelhi.com
                                    </a>
                                </li>
                                <li className='d-none d-sm-block text-center ps-5'>
                                    <FaHouseChimney className='' />&nbsp;&nbsp;&nbsp;
                                    <a href="https://www.delhishoppingcomplex.com" className="text-decoration-none">
                                        <i className="fa fa-home" aria-hidden="true" />
                                        Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </a>
                                    <span className='animate'>
                                        <FaUserCircle />&nbsp;&nbsp;
                                        <a href="#" className="text-decoration-none inline-flex items-center animate-blink">
                                            <i className="fa fa-user-circle" aria-hidden="true"></i>
                                            <span>Registration Closed</span>
                                        </a>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <div className="" style={{ backgroundColor: "#c6c6c6" }}>
                <div className="container ">
                    <marquee direction="left ">
                        <p className='py-2 mb-0'><span>Pahle Dukan Phir Makaan Yojana(PDPMY)  | </span>
                            <span>ATTENTION REGISTRATION OPEN !!!! दिल्ली में अपनी दुकान बुक करें </span>
                            <span> *** 40 % कोटा महिलाओं एवं वरिष्ठ नागरिकों के लिये आरक्षित है। </span>
                            <span> *** UNIT Allocation DATE & TIME 08-03-2024 16:00:00</span>
                            <span> *** LAST DATE & TIME OF APPLICATION 07-03-2024 23:59:00</span>
                            <span> *** Registration Amount is Fully Refundable for Unsuccessful Applicants Within 30 Days</span></p>
                    </marquee>
                </div>
            </div>
        </div>
    )
}

export default Header;

// import React from 'react'
// import { FaMobile } from "react-icons/fa";
// import { MdOutlineEmail } from "react-icons/md";
// import { FaHouseChimney } from "react-icons/fa6";
// import { FaUserCircle } from "react-icons/fa";


// const Header = () => {

//     return (

//         <>
//             <div className='container'>
//                 <div className='row'>

//                     <div className='col-sm-6' style={{ width: '40%' }}>
//                         <div className=''>
//                             <div className='h-40 w-full bg-white'>
//                                 <div className=''>
//                                     <img src="../../Images/yojna-main.jpg" style={{ height: "65px", maxWidth: "100%" }} />
//                                 </div>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="col-sm-6 ms-auto " style={{ width: '40%' }}>
//                         <div style={{ marginTop: 5, marginBottom: 5 }}>
//                             <ul className="list-unstyled text-end sm:text-sm">
//                                 <li>
//                                     <FaMobile />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                     <a href="tel:9811750130" className="text-decoration-none">
//                                         +91 9811-750-130
//                                     </a>
//                                     /<a href="tel:8527134491" className="text-decoration-none d-none d-sm-block">8527134491</a>
//                                 </li>
//                                 <li>
//                                     <MdOutlineEmail className='d-none d-sm-block' />&nbsp;&nbsp;
//                                     <a href="mailto:info@shoppingcomplexdelhi.com" className="text-decoration-none d-none d-sm-block">
//                                         <i className="fa fa-envelope d-none d-sm-block" aria-hidden="true" />
//                                         info@shoppingcomplexdelhi.com
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <FaHouseChimney className='d-none d-sm-block' />&nbsp;&nbsp;&nbsp;
//                                     <a href="https://www.delhishoppingcomplex.com" className="text-decoration-none d-none d-sm-block">
//                                         <i className="fa fa-home d-none d-sm-block" aria-hidden="true" />
//                                         Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                     </a>
//                                     <span className='animate'>
//                                         <FaUserCircle className='d-none d-sm-block' />&nbsp;&nbsp;
//                                         <a href="#" className="text-decoration-none inline-flex items-center  d-none d-sm-block">
//                                             <i className="fa fa-user-circle d-none d-sm-block" aria-hidden="true"></i>
//                                             <span>Registration Closed</span>
//                                         </a>
//                                     </span>
//                                 </li>
//                             </ul>
//                         </div>
//                     </div>

//                 </div>
//             </div>

//             {/* <div className="row">
//                 <div className='col-lg-6 col-md-2' style={{ width: '40%' }}>
//                     <div className=''>
//                         <div className='h-40 w-full bg-white'>
//                             <div className='text-center'>
//                                 <img src="../../Images/yojna-main.jpg" style={{ height: "65px", maxWidth: "100%" }} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-lg-6 col-md-10 ms-lg-auto" style={{ width: '40%' }}>
//                     <div style={{ marginTop: 5, marginBottom: 5 }}>
//                         <ul className="list-unstyled text-sm-start">
//                             <li className=''>
//                                 <FaMobile />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                 <a href="tel:9811750130" className="text-decoration-none">
//                                     +91 9811750130
//                                 </a>
//                                 /<a href="tel:8527134491" className="text-decoration-none">8527134491</a>
//                             </li>
//                             <li>
//                                 <MdOutlineEmail />&nbsp;&nbsp;
//                                 <a href="mailto:info@shoppingcomplexdelhi.com" className="text-decoration-none">
//                                     <i className="fa fa-envelope" aria-hidden="true" />
//                                     info@shoppingcomplexdelhi.com
//                                 </a>
//                             </li>
//                             <li>
//                                 <FaHouseChimney />&nbsp;&nbsp;&nbsp;
//                                 <a href="https://www.delhishoppingcomplex.com" className="text-decoration-none">
//                                     <i className="fa fa-home" aria-hidden="true" />
//                                     Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
//                                 </a>
//                                 <span className='animate'>
//                                     <FaUserCircle />&nbsp;&nbsp;
//                                     <a href="#" className="text-decoration-none inline-flex items-center animate-blink">
//                                         <i className="fa fa-user-circle" aria-hidden="true"></i>
//                                         <span>Registration Closed</span>
//                                     </a>
//                                 </span>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </div> */}


//             <div className="" style={{ backgroundColor: "#c6c6c6" }}>
//                 <div className="container ">
//                     <marquee direction="left ">
//                         <p className='py-2 mb-0'><span>Pahle Dukan Phir Makaan Yojana(PDPMY)  | </span>
//                             <span>ATTENTION REGISTRATION OPEN !!!! दिल्ली में अपनी दुकान बुक करें </span>
//                             <span> *** 40 % कोटा महिलाओं एवं वरिष्ठ नागरिकों के लिये आरक्षित है। </span>
//                             <span> *** UNIT Allocation DATE & TIME 08-03-2024 16:00:00</span>
//                             <span> *** LAST DATE & TIME OF APPLICATION 07-03-2024 23:59:00</span>
//                             <span> *** Registration Amount is Fully Refundable for Unsuccessful Applicants Within 30 Days</span></p>
//                     </marquee>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default Header;