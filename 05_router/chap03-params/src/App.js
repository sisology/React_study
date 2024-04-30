import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./layouts/Layout";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Main from "./pages/Main";
import MenuDetails from "./pages/MenuDetails";
import MenuSearchResult from "./pages/MenuSearchResult";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Layout/> }>
            <Route index element={ <Main/> }/>
            <Route path="about" element={ <About/> }/>
            <Route path="menu">
                <Route index element={ <Menu/> }/>
                <Route path=":menuCode" element={ <MenuDetails/> }/>
                <Route path="search" element={ <MenuSearchResult/> }/>
            </Route>
        </Route>
        <Route path="*" element={ <Error/> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
