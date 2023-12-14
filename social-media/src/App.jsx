import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostStoreProvider from "./Contexts/PostStore";
import { Outlet } from "react-router-dom";

function App() {
  // const [switchContent, setSwitchContent] = useState("home");
  return (
    <PostStoreProvider>
      <div className="side-nav">
        <Sidebar />
        <div className="content">
          <Header />
          <Outlet />
          <Footer />
        </div>
      </div>
    </PostStoreProvider>
  );
}

export default App;
