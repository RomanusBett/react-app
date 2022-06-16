import React from "react";
import { CssBaseline,} from '@mui/material';
import HomeBody from './homebody';
import Footer from './Footer';



const Home = ()=>{
    return(
        <>
        {/* This is the Toolbar */}
        <CssBaseline />
  
        <main>
        <HomeBody />
        </main>
        <Footer />
        </>
    )
}
export default Home;