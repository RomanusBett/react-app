import React, {useEffect, useState} from "react";
import './adminform.css';
import { Audio } from "react-loader-spinner";

const Adminform =()=>{
    const [receivedData, setReceivedData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://carpartdata-default-rtdb.firebaseio.com/orders.json');
            if(!response.ok){
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            const receivedData = [];

            for( const key in data){
                receivedData.push({
                    id: key,
                    orderedItems: data[key].orderedItems,
                    user: data[key].user, 
                });
            }

            setReceivedData(receivedData);
            setIsLoading(false);

        }
        fetchData().catch((error) => {

          });
    } , []);



   const allData =               
   receivedData.map((item) => (
    <div className="data-div">

 
    <h3>CITY: {item.user.city}</h3>
    <h3>POSTAL CODE:{item.user.postal}</h3>
    <h3>STREET NUMBER:{item.user.street}</h3>
    <h3>NAME OF CLIENT:{item.user.name}</h3>
    {()=>{
        for(let i=0; i<item.orderedItems.length; i++){
            return(
                <div>
                    <h3>{item.orderedItems[i].name}</h3>
                    <h3>{item.orderedItems[i].price}</h3>
                    <h3>{item.orderedItems[i].amount}</h3>
                </div>
            )
        }
    }
    }
    TOTAL NUMBER OF ITEMS ORDERED:
    {item.orderedItems.length}

    </div>    
))
   return(
    <div>
         <div className="adminMaindiv">
         <h2>NEW<span className="welcome-span">ORDERS</span> </h2>
         <h3>All customer orders are listed below. To create a new item for sale click on the open form to submit a new listing.
             Specific customer order will come soon.</h3>
            <div className="ingridContainer">
            {isLoading &&       
    <div className='centered'>
      <Audio
       height = "80"
       width = "80"
       radius = "9"
       color = 'blue'
       ariaLabel = 'three-dots-loading'     
       wrapperStyle
       wrapperClass
     />
      </div>
      }
            {allData}
            </div>
         </div>
    </div>
   )
}

export default Adminform;