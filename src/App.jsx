import './App.css'
import Main from './Layout/Main/Main'

const ticketResponse = fetch("/public/ticket.json").then(res => res.json());

function App() {
  return (
    <>
      <Main ticketResponse={ticketResponse}></Main>
    </>
  )
}

export default App
