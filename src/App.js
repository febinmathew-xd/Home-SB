import "./App.css";

import Header from "./component/Header";
import About from "./component/About";
import Register from "./component/Register";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./component/Contact";
import Turf from "./component/Turf";
import Eliteturf from "./component/TurfBooking";
import Homepage from "./component/HomePage";
import Booking from "./component/Booking";
import Distributor from "./component/Distributor";
import Accessories from "./component/Accessories";
import Cart from "./component/Cart";
import Ordernow from "./component/Ordernow";
import Feedback from "./component/Feedback";
import { useContext } from "react";
import { AuthenticationContext } from "./component/AuthenticationContext";
import ViewSingleProduct from "./component/ViewSingleProduct";
import Payment from "./component/Payment";
import Orders from "./component/Orders";
import ViewSingleTurf from "./component/ViewSingleTurf";
import TurfBooking from "./component/TurfBooking";
import ComplaintPage from "./component/ComplaintPage";
import Tournament from "./component/Tournament";

function App() {
  const { isAuthenticated } = useContext(AuthenticationContext);
  return (
    <div>
      <BrowserRouter>
        {isAuthenticated ? (
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/turf" element={<Turf />} />
            <Route path="/turfbooking" element={<TurfBooking />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/distributor" element={<Distributor />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/viewsingleproduct" element={<ViewSingleProduct />} />
            <Route path="/viewsingleturf" element={<ViewSingleTurf />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/ordernow" element={<Ordernow />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            <Route path="/tournament" element={<Tournament/>}/>
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
