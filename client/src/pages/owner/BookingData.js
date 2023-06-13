import React,{useState, useEffect} from 'react'
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import BookingTable from "../../components/BookingTable";
import { useSelector } from "react-redux";
import { Bookings } from '../../api calls/owner';

function BookingData() {
  const [details, setDetails] = useState([]);
  
    const currentOwner = useSelector((state) => state.getUser.getOwner);
    const role = currentOwner.role;
    const name = currentOwner.name;
    
  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        setDetails(response.data);
        console.log(response);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBookings();
  }, []);

    
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <div className="flex flex-grow">
          <div className="w-1/6">
            <Sidebar role={role} />
          </div>
          <div className="container w-3/4 mb-16 m mt-14">
            <BookingTable details={details}/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default BookingData