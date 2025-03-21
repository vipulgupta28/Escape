import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";



const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="bg-black text-white ">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
