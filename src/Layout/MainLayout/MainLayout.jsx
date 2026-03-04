import Navbar from "../../components/Navbar/Navbar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Bounce, ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";

const Main = ({ ticketResponse }) => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* counter, tickets & sidebar container */}
            <MainContainer ticketResponse={ticketResponse}></MainContainer>

            {/* react toastify container */}
            <ToastContainer
                position="top-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick={true}
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover
                theme="light"
                transition={Bounce}
            />

            {/* footer */}
            <Footer></Footer>
        </div>
    );
};

export default Main;
