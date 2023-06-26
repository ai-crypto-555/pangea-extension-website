import { GoogleOAuthProvider } from "@react-oauth/google";
import Provider from "./context";
import './App.css';
import Router from './router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe('pk_test_51NNAZVI22Dumpev2qUcb7cfrwSPYuiA46r4y9eYibP85bV9NvlDk5xDGpC8pr8ndil4obF2L3fsHoDm7bImhw44q00j8xjEgY0');

function App() {
  return (
    <Provider>
      <GoogleOAuthProvider clientId='176617244949-ni758vb1c47i8m9ib0e44o8rrjtm948s.apps.googleusercontent.com'>
        <div className="App">
          <Elements stripe={stripePromise}>
            <Router />
          </Elements>
        </div>
      </GoogleOAuthProvider>
    </Provider>
  );
}

export default App;
