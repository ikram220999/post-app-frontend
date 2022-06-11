import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter,
  Link,
  Route,
  Router,
  useRoutes,
} from "react-router-dom";
import homepic from "./images/3333449.jpg";
import Home from "./pages/Home";
import { routes } from "./routes";
import SidebarMenu from "./pages/sidebar/Sidebar";
import Header from './components/Header';

function App() {
  const content = useRoutes(routes);
  return (
    <>
      <div className="flex flex-row bg-gray-100 full p-0">
        <SidebarMenu />
        <div className="w-full min-h-screen p-10">
          {/* <Header /> */}
      
          <div className=" w-full ">{content}</div>
        </div>
      </div>
    </>
  );
}

export default App;
