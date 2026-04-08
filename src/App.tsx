import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate, Outlet } from "react-router-dom";
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
import { AppLayout } from "./components/AppLayout";
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

const LazyFallback = () => (
  <div className="flex items-center justify-center h-64">
    <div className="w-6 h-6 border-2 border-primary/20 border-t-primary rounded-full animate-spin" />
  </div>
);

function LazyRoute({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<LazyFallback />}>{children}</Suspense>;
}

function ProtectedLayout() {
  const { isAuthenticated } = useApp();
  if (!isAuthenticated) return <Navigate to="/" />;
  return <AppLayout />;
}

function AppRoutes() {
  const { isAuthenticated } = useApp();

  return (
    <Routes>
      <Route path="/" element={isAuthenticated ? <Navigate to="/app" /> : <LandingPage />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/request-access" element={<RequestAccess />} />

      {/* All authenticated routes share the same AppLayout instance */}
      <Route path="/app" element={<ProtectedLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="clientes" element={<ClientesPage />} />
        <Route path="clientes/novo" element={<ClienteForm />} />
        <Route path="produtos" element={<ProdutosPage />} />
        <Route path="usuarios" element={<UsuariosPage />} />
        <Route path="funcionarios" element={<FuncionariosPage />} />
        <Route path="fornecedores" element={<FornecedoresPage />} />
        <Route path="pedidos" element={<PedidosPage />} />
        <Route path="pedidos/novo" element={<PedidoForm />} />
        <Route path="faturamento" element={<FaturamentoPage />} />
        <Route path="estoque" element={<EstoquePage />} />
        <Route path="formularios" element={<FormShowcase />} />
        <Route path="tabelas" element={<TableShowcase />} />
        <Route path="painel" element={<AdminPanelShowcase />} />

        {/* UI Elements */}
        <Route path="templates/ui/alerts" element={<LazyRoute><AlertsShowcase /></LazyRoute>} />
        <Route path="templates/ui/badge" element={<LazyRoute><BadgeShowcase /></LazyRoute>} />
        <Route path="templates/ui/breadcrumb" element={<LazyRoute><BreadcrumbShowcase /></LazyRoute>} />
        <Route path="templates/ui/buttons" element={<LazyRoute><ButtonsShowcase /></LazyRoute>} />
        <Route path="templates/ui/buttongroup" element={<LazyRoute><ButtonGroupShowcase /></LazyRoute>} />
        <Route path="templates/ui/cards" element={<LazyRoute><CardsShowcase /></LazyRoute>} />
        <Route path="templates/ui/dropdowns" element={<LazyRoute><DropdownsShowcase /></LazyRoute>} />
        <Route path="templates/ui/images" element={<LazyRoute><ImagesShowcase /></LazyRoute>} />
        <Route path="templates/ui/links" element={<LazyRoute><LinksShowcase /></LazyRoute>} />
        <Route path="templates/ui/listgroup" element={<LazyRoute><ListGroupShowcase /></LazyRoute>} />
        <Route path="templates/ui/navstabs" element={<LazyRoute><NavsTabsShowcase /></LazyRoute>} />
        <Route path="templates/ui/objectfit" element={<LazyRoute><ObjectFitShowcase /></LazyRoute>} />
        <Route path="templates/ui/pagination" element={<LazyRoute><PaginationShowcase /></LazyRoute>} />
        <Route path="templates/ui/popovers" element={<LazyRoute><PopoversShowcase /></LazyRoute>} />
        <Route path="templates/ui/progress" element={<LazyRoute><ProgressShowcase /></LazyRoute>} />
        <Route path="templates/ui/spinners" element={<LazyRoute><SpinnersShowcase /></LazyRoute>} />
        <Route path="templates/ui/toasts" element={<LazyRoute><ToastsShowcase /></LazyRoute>} />
        <Route path="templates/ui/tooltips" element={<LazyRoute><TooltipsShowcase /></LazyRoute>} />
        <Route path="templates/ui/typography" element={<LazyRoute><TypographyShowcase /></LazyRoute>} />

        <Route path="templates/*" element={<TemplatePlaceholder />} />
      </Route>

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
