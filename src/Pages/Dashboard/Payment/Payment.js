import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React , {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import CheckoutFrom from './CheckoutFrom';

const stripePromise = loadStripe('pk_test_51JvlaCChr92zkNjDrq9IWsxbTHEmS5eMDZnIvcG3Wiy9oG8JkUv2J7q7M6mLKoQEBB394VvhgLsJvlbjyRfvaATm00Plhjbli4')
 
const Payment = () => {
  const {productId} = useParams()
  const [payments, setPayments ] = useState([])
  const [detailsItam, setDetailsItam] = useState([]);

  useEffect(() => {
    fetch(`https://blooming-thicket-66783.herokuapp.com/ordersInfo`)
      .then((res) => res.json())
      .then((data) =>setPayments(data));
  }, []);

  
    useEffect( ()=> {
      if (payments?.length > 0) {
        const matchItam = payments.find(payment => payment._id == productId)
        setDetailsItam(matchItam);
        console.log(matchItam)
      }
  
    }, [payments , productId])
    console.log(detailsItam);

    return (

        <>
           {/* <Navigation></Navigation>  */}
            <h2>this is payment {productId}</h2>
            <h3>pay : {detailsItam?.price}</h3>
            <h3>pay : {detailsItam?.name}</h3>
            <img src={detailsItam.img} alt="" />
         {detailsItam?.price &&  <Elements stripe={stripePromise}>
                <CheckoutFrom
                    detailsItam = {detailsItam}
                />
            </Elements>}
          
        </>
    );
};

export default Payment;