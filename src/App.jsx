import "./App.css";
import Main from "./Layout/MainLayout/MainLayout";

const ticketResponse = fetch("/public/ticket.json").then((res) => res.json());

function App() {
    return (
        <>
            <Main ticketResponse={ticketResponse}></Main>
        </>
    );
}

export default App;
