import Route from "./components/Route";
import Sidebar from "./components/Sidebar";
import AccordionPage from './pages/AccordionPage'
import DropdownPage from './pages/DropdownPage'
import ButtonPage from './pages/ButtonPage'
import ModalPage from "./pages/ModalPage"
import TablePage from "./pages/TablePage";

function App() {


  return <div className="container mx-6 grid grid-cols-4 gap-4 mt-8">    
    <Sidebar/>
    {/* if current path is accordion show AccordionPage: */}
    <Route path='/accordion'>
      <AccordionPage/>
    </Route>

    <Route path="/">
      <DropdownPage/>
    </Route>

    <Route path="/buttons">
      <ButtonPage/>
    </Route>

    <Route path="/modal">
      <ModalPage />
    </Route>

    <Route path="/table">
      <TablePage />
    </Route>
    </div>
}

export default App;
