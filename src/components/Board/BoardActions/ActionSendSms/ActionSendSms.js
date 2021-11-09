import React from 'react';
import './ActionSendSms.scss';

const ActionSendSms = () => {
    return (
        <React.Fragment>
            <p className={"sms-message-info"}>1 Multimedia message
                <div>
                    <span>~ 0.02$</span>
                    <div className={"info"}>?
                        <span className="info-text">1 Multimedia message costs ~0.02$</span>
                    </div>
                </div>
            </p>
            <div className="multimedia-preview">
                <i className="far fa-image"/>
                <span>Image</span>
            </div>
            <div className="sms-message-preview">
                <span>Hi </span><input placeholder={"First Name"} type="text"/>,<br/><br/>
                <p>Here is your <input placeholder={"Offer"} type="text"/> coupon</p>
                <p>Please redeem here👇</p>
                <a href="https://mc.ht/s/XXXXX">https://mc.ht/s/XXXXX</a>
            </div>
        </React.Fragment>
    );
};

export default ActionSendSms;