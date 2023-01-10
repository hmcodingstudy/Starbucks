import { Routes, Route } from 'react-router-dom';
import Main from '../routes/Main.js';
import Auth from '../routes/Auth.js'
import Join from '../routes/Join.js'
import Profile from '../routes/Profile.js'
import My from '../routes/My.js'
import Order from '../routes/Order.js';
import Detail from '../routes/Detail.js'
import Cart from '../routes/Cart.js'
import Payment from '../routes/Payment.js'
import Complete from '../routes/Complete.js'

function Router(props) {
    return (
        <>
        <Routes>
            {
                props.isLoggedIn ?
                <>
                <Route path="/" element={<Main/>}></Route>
                </> : <Route path="/" element={<Auth/>}></Route>
            }
            <Route path="/Order" element={
                <Order/>
            }/>
            <Route path="/join" element={<Join/>}/>
            <Route path="/my" element={<My/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/payment" element={<Payment/>}/>
            <Route path="/complete" element={<Complete/>}/>
            <Route path="/profile" element={<Profile/>}/>
            <Route path="*" element={ <div>존재하지 않는 페이지입니다.</div> } />
        </Routes>
        </>
    );
}

export default Router;
