import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import Form from "./components/Form";
import PostList from "./components/PostList";
import { ContentSwitch } from "./Contexts/ContentSwitch";
import { useState } from "react";
import PostStoreProvider from "./Contexts/PostStore";

function App() {
  const [switchContent, setSwitchContent] = useState("home");
  return (
    <PostStoreProvider>
      <ContentSwitch.Provider value={{ switchContent, setSwitchContent }}>
        <div className="side-nav">
          <Sidebar />
          <div className="content">
            <Header />
            {switchContent === "home" ? <PostList /> : <Form />}
            <Footer />
          </div>
        </div>
      </ContentSwitch.Provider>
    </PostStoreProvider>
  );
}

export default App;
