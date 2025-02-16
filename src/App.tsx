
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Index from "@/pages/Index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
