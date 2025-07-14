import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import SeguroMoto from "./pages/produtos/SeguroMoto";
import SeguroVeiculos from "./pages/produtos/SeguroVeiculos";
import SeguroVida from "./pages/produtos/SeguroVida";
import SeguroResidencial from "./pages/produtos/SeguroResidencial";
import SeguroEmpresarial from "./pages/produtos/SeguroEmpresarial";
import SaudeOdonto from "./pages/produtos/SaudeOdonto";
import SeguroAgronegocio from "./pages/produtos/SeguroAgronegocio";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/produtos/moto" element={<SeguroMoto />} />
          <Route path="/produtos/veiculos" element={<SeguroVeiculos />} />
          <Route path="/produtos/vida" element={<SeguroVida />} />
          <Route path="/produtos/residencial" element={<SeguroResidencial />} />
          <Route path="/produtos/empresarial" element={<SeguroEmpresarial />} />
          <Route path="/produtos/saude" element={<SaudeOdonto />} />
          <Route path="/produtos/agronegocio" element={<SeguroAgronegocio />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
