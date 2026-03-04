import Navbar from "../../components/Navbar/Navbar";
import MainContainer from "../../components/MainContainer/MainContainer";

const Main = ({ ticketResponse }) => {
    return (
        <div>
            {/* navbar */}
            <Navbar></Navbar>

            {/* counter, tickets & sidebar container */}
            <MainContainer ticketResponse={ticketResponse}></MainContainer>

            {/* footer */}
        </div>
    );
};

export default Main;
