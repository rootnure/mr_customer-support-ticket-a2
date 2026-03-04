import Navbar from "../../components/Navbar/Navbar";
import MainContainer from "../../components/MainContainer/MainContainer";
import { Bounce, ToastContainer } from "react-toastify";

const Main = ({ ticketResponse }) => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* counter, tickets & sidebar container */}
            <MainContainer ticketResponse={ticketResponse}></MainContainer>

            {/* react toastify container */}
            <ToastContainer
                position="top-right"
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
        </div>
    );
};

export default Main;
