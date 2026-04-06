import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AppProvider, useApp } from "@/contexts/AppContext";
import LandingPage from "./pages/LandingPage";
import Dashboard from "./pages/Dashboard";
import ForgotPassword from "./pages/ForgotPassword";
import RequestAccess from "./pages/RequestAccess";
import {
  ClientesPage, ProdutosPage, UsuariosPage, FuncionariosPage,
  FornecedoresPage, PedidosPage, FaturamentoPage, EstoquePage
} from "./pages/modules";
import ClienteForm from "./pages/modules/ClienteForm";
import PedidoForm from "./pages/modules/PedidoForm";
import FormShowcase from "./pages/modules/FormShowcase";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AppRoutes() {
  const { isAuthenticated } = useApp();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/app" /> : <LandingPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/request-access" element={<RequestAccess />} />
      <Route path="/app" element={isAuthenticated ? <Dashboard /> : <Navigate to="/" />} />
      <Route path="/app/clientes" element={isAuthenticated ? <ClientesPage /> : <Navigate to="/" />} />
      <Route path="/app/clientes/novo" element={isAuthenticated ? <ClienteForm /> : <Navigate to="/" />} />
      <Route path="/app/produtos" element={isAuthenticated ? <ProdutosPage /> : <Navigate to="/" />} />
      <Route path="/app/usuarios" element={isAuthenticated ? <UsuariosPage /> : <Navigate to="/" />} />
      <Route path="/app/funcionarios" element={isAuthenticated ? <FuncionariosPage /> : <Navigate to="/" />} />
      <Route path="/app/fornecedores" element={isAuthenticated ? <FornecedoresPage /> : <Navigate to="/" />} />
      <Route path="/app/pedidos" element={isAuthenticated ? <PedidosPage /> : <Navigate to="/" />} />
      <Route path="/app/pedidos/novo" element={isAuthenticated ? <PedidoForm /> : <Navigate to="/" />} />
      <Route path="/app/faturamento" element={isAuthenticated ? <FaturamentoPage /> : <Navigate to="/" />} />
      <Route path="/app/estoque" element={isAuthenticated ? <EstoquePage /> : <Navigate to="/" />} />
      <Route path="/app/formularios" element={isAuthenticated ? <FormShowcase /> : <Navigate to="/" />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
