import React from "react";
import { useNavigate } from "react-router-dom";
import alumnifeed from './illustrations/alumnifeed.svg';
import instifeed from './illustrations/instifeed.svg';
import guestfeed from './illustrations/guestfeed.svg';
import studfeed from './illustrations/studfeed.svg';
const Home = () => {
    const navigate = useNavigate();
    return (
        <div>
            <div className="main">
                <h1>Feedbacks </h1>
                <div className="cards">
                    <div className="card" onClick={() => { navigate("/InstitutionalFeed") }}>
                        <img src={instifeed} alt="Hang on right there !!!" />
                        <h3>  Institute Feedback </h3>
                    </div>
                    <div className="card" onClick={() => { navigate("/AluminiFeed") }}>
                        <img src={alumnifeed} alt="Hang on right there !!!" />
                        <h3> Alumni Feedback </h3>
                    </div>
                    <div className="card" onClick={() => { navigate("/GuestFeedback") }}>
                        <img src={guestfeed} alt="Hang on right there !!!" />
                        <h3> Guest Feedback </h3>
                    </div>
                    <div className="card" onClick={() => { navigate("/StudentFeed") }}>
                        <img src={studfeed} alt="Hang on right there !!!" />
                        <h3> Student Feedback </h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;