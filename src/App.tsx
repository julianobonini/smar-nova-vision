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
import TableShowcase from "./pages/modules/TableShowcase";
import AdminPanelShowcase from "./pages/modules/AdminPanelShowcase";
import TemplatePlaceholder from "./pages/templates/TemplatePlaceholder";
import NotFound from "./pages/NotFound";
import { lazy, Suspense } from "react";

// UI Elements showcases
const AlertsShowcase = lazy(() => import("./pages/templates/ui/AlertsShowcase"));
const BadgeShowcase = lazy(() => import("./pages/templates/ui/BadgeShowcase"));
const BreadcrumbShowcase = lazy(() => import("./pages/templates/ui/BreadcrumbShowcase"));
const ButtonsShowcase = lazy(() => import("./pages/templates/ui/ButtonsShowcase"));
const ButtonGroupShowcase = lazy(() => import("./pages/templates/ui/ButtonGroupShowcase"));
const CardsShowcase = lazy(() => import("./pages/templates/ui/CardsShowcase"));
const DropdownsShowcase = lazy(() => import("./pages/templates/ui/DropdownsShowcase"));
const ImagesShowcase = lazy(() => import("./pages/templates/ui/ImagesShowcase"));
const LinksShowcase = lazy(() => import("./pages/templates/ui/LinksShowcase"));
const ListGroupShowcase = lazy(() => import("./pages/templates/ui/ListGroupShowcase"));
const NavsTabsShowcase = lazy(() => import("./pages/templates/ui/NavsTabsShowcase"));
const ObjectFitShowcase = lazy(() => import("./pages/templates/ui/ObjectFitShowcase"));
const PaginationShowcase = lazy(() => import("./pages/templates/ui/PaginationShowcase"));
const PopoversShowcase = lazy(() => import("./pages/templates/ui/PopoversShowcase"));
const ProgressShowcase = lazy(() => import("./pages/templates/ui/ProgressShowcase"));
const SpinnersShowcase = lazy(() => import("./pages/templates/ui/SpinnersShowcase"));
const ToastsShowcase = lazy(() => import("./pages/templates/ui/ToastsShowcase"));
const TooltipsShowcase = lazy(() => import("./pages/templates/ui/TooltipsShowcase"));
const TypographyShowcase = lazy(() => import("./pages/templates/ui/TypographyShowcase"));

const queryClient = new QueryClient();

function UIRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) return <Navigate to="/" />;
  return <Suspense fallback={<div className="flex items-center justify-center h-64"><div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" /></div>}>{children}</Suspense>;
}

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
      <Route path="/app/tabelas" element={isAuthenticated ? <TableShowcase /> : <Navigate to="/" />} />
      <Route path="/app/painel" element={isAuthenticated ? <AdminPanelShowcase /> : <Navigate to="/" />} />
      
      {/* UI Elements */}
      <Route path="/app/templates/ui/alerts" element={<UIRoute><AlertsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/badge" element={<UIRoute><BadgeShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/breadcrumb" element={<UIRoute><BreadcrumbShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/buttons" element={<UIRoute><ButtonsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/buttongroup" element={<UIRoute><ButtonGroupShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/cards" element={<UIRoute><CardsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/dropdowns" element={<UIRoute><DropdownsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/images" element={<UIRoute><ImagesShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/links" element={<UIRoute><LinksShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/listgroup" element={<UIRoute><ListGroupShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/navstabs" element={<UIRoute><NavsTabsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/objectfit" element={<UIRoute><ObjectFitShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/pagination" element={<UIRoute><PaginationShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/popovers" element={<UIRoute><PopoversShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/progress" element={<UIRoute><ProgressShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/spinners" element={<UIRoute><SpinnersShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/toasts" element={<UIRoute><ToastsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/tooltips" element={<UIRoute><TooltipsShowcase /></UIRoute>} />
      <Route path="/app/templates/ui/typography" element={<UIRoute><TypographyShowcase /></UIRoute>} />

      <Route path="/app/templates/*" element={isAuthenticated ? <TemplatePlaceholder /> : <Navigate to="/" />} />
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
