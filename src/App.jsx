import { Suspense } from "react";
import "./App.css";
import MainLayout from "./Layout/MainLayout/MainLayout";

const ticketResponse = fetch("/ticket.json").then((res) => res.json());

function App() {
    return (
        <>
            <Suspense
                fallback={
                    <h3 className="text-3xl font-bold py-20 w-full text-center">
                        Tickets Loading...
                    </h3>
                }
            >
                <MainLayout ticketResponse={ticketResponse}></MainLayout>
            </Suspense>
        </>
    );
}

export default App;
