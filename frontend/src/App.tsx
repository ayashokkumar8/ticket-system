
// Import custom
import "./App.css";
import Tickets from './containers/Tickets';
import { TicketsContextProvider } from "./utils/TicketContext";

function App() {
  return (
    <div className="App">
      <TicketsContextProvider>
      <Tickets />
      </TicketsContextProvider>
    </div>
  );
}

export default App;
