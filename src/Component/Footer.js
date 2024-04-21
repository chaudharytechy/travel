import React from 'react'

const Footer = () => {
  return (
 <>
 <div className="copy_right py-4 text-center bg-black">
    <div className="container ">
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-8">
                <p className="text-white">Copyright © 2024 Delhi Shopping Complex- All rights reserved.</p>
                <p className="text-white" style={{ fontSize: '10px' }}><small>THIS SITE IS INFORMATION PURPOSE ONLY AND SHOULD NOT BE TREATED AS THE OFFICIAL INFORMATION</small></p>

                <p className="text-white">
                    <a href="https://www.delhishoppingcomplex.com" className='text-white'>Home</a> | 
                    <a href="https://www.delhishoppingcomplex.com/contactus"className='text-white'>Contact</a> |
                     <a href="https://www.delhishoppingcomplex.com/terms_condition"className='text-white'>Terms & Privacy</a> |
                      <a href="https://www.delhishoppingcomplex.com/refund_policy"className='text-white'>Refunds & Cancellation</a> |
                       <a href="https://www.delhishoppingcomplex.com/faq"className='text-white'>FAQ</a>
                </p>

                <p className="text-white" style={{ fontSize: '10px' }}>
                    <a href="https://www.stalwartsoft.com"className='text-white'>Developed by Stalwartsoft Technologies</a>
                </p>
            </div>
            <div className="col-md-2 text-white fw-bolder" id="count"></div>
        </div>
    </div>
</div>

 </>
  )
}

export default Footer