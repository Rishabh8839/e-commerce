import React, { useState } from 'react';
import PaymentForms from "../js/PaymentForms";
import PaymentForm from "../js/PaymentForm";

const mystyle = {
  boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px',
  borderRadious: '30px',
};
const iconStyle = {
  color: '#2874f0'
};
const Checkout = () => {
  const [showLogin, setshowLogin] = useState(true)
  const [showOrderSummery, setshowOrderSummery] = useState(false)
  const [showDelivery, setShowDelivery] = useState(false)
  const [showPaymewnt, setshowPaymewnt] = useState(false)
  let [num, setNum] = useState(0);

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  }
  let handleChange = (e) => {
    setNum(e.target.value);
  }

  const onHandleClick = (param) => {
    console.log(param);
    switch (param) {
      case 'Contenue':
        setshowLogin(false)
        setShowDelivery(true)
        break
      case 'Deliver':
        setShowDelivery(false)
        setshowOrderSummery(true)
        break
      case 'Order':
        setshowOrderSummery(false)
        setshowPaymewnt(true)
        break
    }
  };
 
  return (
    <div className="layout">
      {/* <PaymentForms /> */}
      <section className='container '>
        <div className="row">
          <div className="col-8">
            <div className="card" style={mystyle}>
              <div className="card-header" >
                <div className='d-flex justify-content-between'>
                  <h4 >Login</h4>
                  {!showLogin && <button className='btn btn-light' onClick={() => setshowLogin(true)}>Change</button>}
                </div>
              </div>
              {showLogin &&
                <div className="card-body" >
                  <div className="col-12">
                    <div className="row">
                      <div className="col-6">
                        <span className='text-muted'>Name  </span>
                        <span style={{ fontWeight: 500, }}>Rishabh Bagul</span>
                        <br />
                        <span className='text-muted'>Phone  </span>
                        <span style={{ fontWeight: 500, }}>+918839166852</span>
                        <br />
                        <p style={{ cursor: 'pointer', color: '#2874f0' }}>Logout & Signin to another account</p>
                        <button className='btn btn-secondary btn-lg' onClick={() => onHandleClick('Contenue')}
                          style={{ textTransform: 'uppercase', width: '100%', background: '#fb641b', border: 'none', fontSize: '15px' }} >
                          Contenue Checkout
                        </button>
                      </div>
                      <div className="col-6">
                        <span className='text-muted'>Advantages of our Secure login</span>
                        <br />
                        <div>
                          <i className='fa fa-truck' style={iconStyle}></i>&nbsp;
                          Easyly Track Orders,Hassle free Return
                        </div>
                        <div>
                          <i className='fa fa-bell' style={iconStyle}></i>&nbsp;
                          Get Relevent Alerts and Recomondation
                        </div>
                        <div>
                          <i className='fa fa-star' style={iconStyle}></i>&nbsp;
                          Wishlis, Review, Rating and more
                        </div>


                      </div>
                      <div className='mt-2'>
                        <p className='text-muted' style={{ fontSize: '14.9px' }}>Please note that upon clicking "Logout" you will be lose all items in cart and will be redirecting to Filpcart home page</p>

                      </div>
                    </div>
                  </div>
                </div>}
            </div>
            <br />
            <div className="card" style={mystyle}>
              <div className="card-header" >
                <div className='d-flex justify-content-between'>
                  <h4 >Delivery Address</h4>
                  {!showDelivery && <button className='btn btn-light' onClick={() => setShowDelivery(false)}>Change</button>}
                </div>
              </div>
              {showDelivery &&
                <div className="card-body" >
                  <div className="col-12">
                    <input type="radio" checked />&nbsp;
                    <span style={{ fontWeight: 500, }}>Rishabh Bagul</span>&nbsp;
                    <span style={{ background: '#f0f0f0', fontSize: '12px', borderRadius: '3px', padding: '2px' }}>Home</span>&nbsp;
                    <span style={{ fontWeight: 500, }}>+918839166705</span>&nbsp;

                    <p className='text-muted mt-2' style={{ fontSize: '14.9px' }}>74 b, prem nagar indore</p>&nbsp;

                    <button className='btn btn-secondary btn-lg mt-2' id="Deliver Here" onClick={() => onHandleClick('Deliver')}
                      style={{ textTransform: 'uppercase', width: '20%', background: '#fb641b', border: 'none', fontSize: '15px' }} >
                      Deliver Here
                    </button>
                    {/* <div className="row">
                      </div> */}
                  </div>
                </div>}
            </div>
            <br />
            <div className="card" style={mystyle}>
              <div className="card-header" >
                <div className='d-flex justify-content-between'>
                  <h4 >Order Summary</h4>
                  {!showOrderSummery && <button className='btn btn-light' onClick={() => setshowOrderSummery(false)}>Change</button>}
                </div>
              </div>
              {showOrderSummery &&
                <div className="card-body" >
                  <div className="col-12">
                    <div className="row">
                      <div className="col-3">
                        <img src='https://rukminim1.flixcart.com/image/100/100/xif0q/sunscreen/i/p/3/50-coffee-sunscreen-lotion-spf-50-pa-lightweight-matte-skin-original-imagj8fxkh6swpng.jpeg?q=90' />
                        <br />
                      </div>
                      <div className="col-6">
                        <span>mCaffeine Coffee Lighweightc & Water Resistant</span>
                        <br />
                        <span className='text-muted'>50ml</span>
                        <br />
                        <span className='text-muted'>Seller:Mcaffeien</span>
                        <br />
                        <span className='text-muted' style={{ textDecoration: 'line-through', fontSize: '14px' }}>$499 &nbsp;</span>
                        <span style={{ fontWeight: '700' }}> $399&nbsp;</span>
                        <span style={{ color: 'green', fontSize: '14px', fontWeight: '500' }}>20% Off</span>
                      </div>
                      <div className="col-3">
                        <span style={{ fontSize: '12px', fontWeight: '700px' }}>Delivery by Sunday Mar 26 | <span style={{ color: 'green', fontSize: '12px', fontWeight: '500' }}>Free</span></span>
                      </div>
                      <div className="col-12">
                        <div className="row align-items-center">
                          <div className="col-2">
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                              </div>
                              <input type="text" className="form-control" value={num} onChange={handleChange} />
                              <div className="input-group-prepend">
                                <button className="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
                              </div>
                            </div>
                          </div>
                          <div className="col-6">
                            <span style={{ fontWeight: '700' }}>Remove</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>}
            </div>
            {showOrderSummery &&
              <div className="card mt-2" style={mystyle}>
                <div className="row" style={{ alignItems: 'center', padding: '20px' }}>
                  <div className='col-8'>
                    <sapn className="">Order confirm email will be sent to demo@examople.com</sapn>
                  </div>
                  <div className='col-4' style={{ display: 'flex', justifyContent: 'end' }}>
                    <button className='btn btn-secondary btn-lg mt-2 ' onClick={() => onHandleClick('Order')}
                      style={{ textTransform: 'uppercase', background: '#fb641b', border: 'none', fontSize: '15px' }} >Continue</button>
                  </div>

                </div>
              </div>

            }
            <br />
            <div className="card" style={mystyle}>
              <div className="card-header" >
                <div className='d-flex justify-content-between'>
                  <h4 >Payment Option</h4>
                  {showPaymewnt && <button className='btn btn-light' onClick={() => setshowPaymewnt(false)}>Change</button>}
                </div>
              </div>
              {showPaymewnt &&
                <PaymentForm />
              }
            </div>
          </div>

          <div className="col-4">
            <div className="card" style={mystyle}>
              <div className="card-header">
                <p style={{ textTransform: 'uppercase', fontWeight: 500, color: 'grey' }}>Price Details</p>
              </div>
              <div className="card-body">
                <div className="col-12">
                  <div className="row">
                    <div className="col-8">
                      Price (1 Item)
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      $399
                    </div>
                    <div className="col-8">
                      Delivery Charegs
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      Free
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-8">
                      Total Payable
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      $399
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex'>
                    You Total Save on this order $100
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="card" style={mystyle}>
              <div className="card-header">
                <p style={{ textTransform: 'uppercase', fontWeight: 500, color: 'grey' }}>Price Details</p>
              </div>
              <div className="card-body">
                <div className="col-12">
                  <div className="row">
                    <div className="col-8">
                      Price (1 Item)
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      $399
                    </div>
                    <div className="col-8">
                      Delivery Charegs
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      Free
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-8">
                      Total Payable
                    </div>
                    <div className="col-4 d-flex justify-content-end">
                      $399
                    </div>
                  </div>
                  <hr />
                  <div className='d-flex'>
                    You Total Save on this order $100
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
};

export default Checkout;