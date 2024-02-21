import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/Login";
import MainLayout from "./layout/MainLayout";
import EditMessage from "./pages/messages/EditMessage";
import CreateMessage from "./pages/messages/CreateMessage";
import MessageList from "./pages/messages/MessageList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/app" element={<MainLayout />}>
          <Route index element={<MessageList />} />
          <Route path="edit" element={<EditMessage />} />
          <Route path="edit/message/:id" element={<EditMessage />} />
          <Route path="create" element={<CreateMessage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
