import React from "react";
import {Button} from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

const ContactUs = () => {
    return(
        <div className="contactUsContainer">
        <div className="mainContactContainer">
        <div className="contactHeadingContainer">
            <h1>CONTACT US</h1>
        </div>
        </div>
        <div className="contactFormContainer">
        <div className="contactUsContentContainer">
        <div className="contactUsform">
        <form>
            <input className="contactInput" type="text" placeholder="Name"/>
            <input className="contactInput" type="email" placeholder="Email"/>
            <input className="contactInput" type="tel" placeholder="phone"/>
            <textarea className="contactTextArea" placeholder="Message"></textarea>
            <Button variant="contained" endIcon={<SendIcon />} sx={{mb:'10px'}}>
                Send
            </Button>        
        </form>
        </div>
        </div>



        <div className="contactDetails">
        <h2>CONTACT DETAILS</h2>
        CarMATE address:<br/>
        Nairobi, Kenya
        <br/>
        phone: 
        <Typography variant='body2' sx={{color:"background.paper",}}> 
        <LocalPhoneIcon/>
        +254XXX XXX XXX
        </Typography>

        </div>
        </div>
        </div>
    )
}
export default ContactUs;