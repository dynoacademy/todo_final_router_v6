import { BrowserRouter, Switch } from "react-router-dom";
import MyRoutes from "./routes/MyRoutes";

import "./styles/app.css";

const App = () => {
  return (
    <>
      <MyRoutes />
    </>
  );
};

export default App;
