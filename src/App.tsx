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

// Forms showcases
const InputsShowcase = lazy(() => import("./pages/templates/forms/InputsShowcase"));
const ChecksRadiosShowcase = lazy(() => import("./pages/templates/forms/ChecksRadiosShowcase"));
const InputGroupShowcase = lazy(() => import("./pages/templates/forms/InputGroupShowcase"));
const FormSelectShowcase = lazy(() => import("./pages/templates/forms/FormSelectShowcase"));
const RangeSliderShowcase = lazy(() => import("./pages/templates/forms/RangeSliderShowcase"));
const InputMasksShowcase = lazy(() => import("./pages/templates/forms/InputMasksShowcase"));
const FileUploadsShowcase = lazy(() => import("./pages/templates/forms/FileUploadsShowcase"));
const DateTimePickerShowcase = lazy(() => import("./pages/templates/forms/DateTimePickerShowcase"));
const ColorPickerShowcase = lazy(() => import("./pages/templates/forms/ColorPickerShowcase"));
const FloatingLabelsShowcase = lazy(() => import("./pages/templates/forms/FloatingLabelsShowcase"));
const FormLayoutsShowcase = lazy(() => import("./pages/templates/forms/FormLayoutsShowcase"));
const SunEditorShowcase = lazy(() => import("./pages/templates/forms/SunEditorShowcase"));
const FormsValidationShowcase = lazy(() => import("./pages/templates/forms/ValidationShowcase"));
const Select2Showcase = lazy(() => import("./pages/templates/forms/Select2Showcase"));

// Advanced UI showcases
const AccordionsShowcase = lazy(() => import("./pages/templates/advancedui/AccordionsShowcase"));
const CarouselShowcase = lazy(() => import("./pages/templates/advancedui/CarouselShowcase"));
const DraggableCardsShowcase = lazy(() => import("./pages/templates/advancedui/DraggableCardsShowcase"));
const ModalsShowcase = lazy(() => import("./pages/templates/advancedui/ModalsShowcase"));
const NavbarShowcase = lazy(() => import("./pages/templates/advancedui/NavbarShowcase"));
const OffcanvasShowcase = lazy(() => import("./pages/templates/advancedui/OffcanvasShowcase"));
const PlaceholdersShowcase = lazy(() => import("./pages/templates/advancedui/PlaceholdersShowcase"));
const RatingsShowcase = lazy(() => import("./pages/templates/advancedui/RatingsShowcase"));
const SwiperShowcase = lazy(() => import("./pages/templates/advancedui/SwiperShowcase"));

// Utilities showcases
const AvatarsShowcase = lazy(() => import("./pages/templates/utilities/AvatarsShowcase"));
const BordersShowcase = lazy(() => import("./pages/templates/utilities/BordersShowcase"));
const BreakpointsShowcase = lazy(() => import("./pages/templates/utilities/BreakpointsShowcase"));
const ColorsShowcase = lazy(() => import("./pages/templates/utilities/ColorsShowcase"));
const ColumnsShowcase = lazy(() => import("./pages/templates/utilities/ColumnsShowcase"));
const FlexShowcase = lazy(() => import("./pages/templates/utilities/FlexShowcase"));
const GuttersShowcase = lazy(() => import("./pages/templates/utilities/GuttersShowcase"));
const HelpersShowcase = lazy(() => import("./pages/templates/utilities/HelpersShowcase"));
const PositionShowcase = lazy(() => import("./pages/templates/utilities/PositionShowcase"));
const AdditionalContentShowcase = lazy(() => import("./pages/templates/utilities/AdditionalContentShowcase"));

// Icons showcases
const RemixIconsShowcase = lazy(() => import("./pages/templates/icons/RemixIconsShowcase"));
const TablerIconsShowcase = lazy(() => import("./pages/templates/icons/TablerIconsShowcase"));
const BootstrapIconsShowcase = lazy(() => import("./pages/templates/icons/BootstrapIconsShowcase"));
const FeatherIconsShowcase = lazy(() => import("./pages/templates/icons/FeatherIconsShowcase"));
const LucideIconsShowcase = lazy(() => import("./pages/templates/icons/LucideIconsShowcase"));

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

        {/* Forms */}
        <Route path="templates/forms/inputs" element={<LazyRoute><InputsShowcase /></LazyRoute>} />
        <Route path="templates/forms/checksradios" element={<LazyRoute><ChecksRadiosShowcase /></LazyRoute>} />
        <Route path="templates/forms/inputgroup" element={<LazyRoute><InputGroupShowcase /></LazyRoute>} />
        <Route path="templates/forms/formselect" element={<LazyRoute><FormSelectShowcase /></LazyRoute>} />
        <Route path="templates/forms/rangeslider" element={<LazyRoute><RangeSliderShowcase /></LazyRoute>} />
        <Route path="templates/forms/inputmasks" element={<LazyRoute><InputMasksShowcase /></LazyRoute>} />
        <Route path="templates/forms/fileuploads" element={<LazyRoute><FileUploadsShowcase /></LazyRoute>} />
        <Route path="templates/forms/datetimepicker" element={<LazyRoute><DateTimePickerShowcase /></LazyRoute>} />
        <Route path="templates/forms/colorpicker" element={<LazyRoute><ColorPickerShowcase /></LazyRoute>} />
        <Route path="templates/forms/floatinglabels" element={<LazyRoute><FloatingLabelsShowcase /></LazyRoute>} />
        <Route path="templates/forms/layouts" element={<LazyRoute><FormLayoutsShowcase /></LazyRoute>} />
        <Route path="templates/forms/suneditor" element={<LazyRoute><SunEditorShowcase /></LazyRoute>} />
        <Route path="templates/forms/validation" element={<LazyRoute><FormsValidationShowcase /></LazyRoute>} />
        <Route path="templates/forms/select2" element={<LazyRoute><Select2Showcase /></LazyRoute>} />

        {/* Advanced UI */}
        <Route path="templates/advancedui/accordions" element={<LazyRoute><AccordionsShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/carousel" element={<LazyRoute><CarouselShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/draggablecards" element={<LazyRoute><DraggableCardsShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/modals" element={<LazyRoute><ModalsShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/navbar" element={<LazyRoute><NavbarShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/offcanvas" element={<LazyRoute><OffcanvasShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/placeholders" element={<LazyRoute><PlaceholdersShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/ratings" element={<LazyRoute><RatingsShowcase /></LazyRoute>} />
        <Route path="templates/advancedui/swiperjs" element={<LazyRoute><SwiperShowcase /></LazyRoute>} />

        {/* Utilities */}
        <Route path="templates/utilities/avatars" element={<LazyRoute><AvatarsShowcase /></LazyRoute>} />
        <Route path="templates/utilities/borders" element={<LazyRoute><BordersShowcase /></LazyRoute>} />
        <Route path="templates/utilities/breakpoints" element={<LazyRoute><BreakpointsShowcase /></LazyRoute>} />
        <Route path="templates/utilities/colors" element={<LazyRoute><ColorsShowcase /></LazyRoute>} />
        <Route path="templates/utilities/columns" element={<LazyRoute><ColumnsShowcase /></LazyRoute>} />
        <Route path="templates/utilities/flex" element={<LazyRoute><FlexShowcase /></LazyRoute>} />
        <Route path="templates/utilities/gutters" element={<LazyRoute><GuttersShowcase /></LazyRoute>} />
        <Route path="templates/utilities/helpers" element={<LazyRoute><HelpersShowcase /></LazyRoute>} />
        <Route path="templates/utilities/position" element={<LazyRoute><PositionShowcase /></LazyRoute>} />
        <Route path="templates/utilities/additionalcontent" element={<LazyRoute><AdditionalContentShowcase /></LazyRoute>} />

        {/* Icons */}
        <Route path="templates/icons/remix" element={<LazyRoute><RemixIconsShowcase /></LazyRoute>} />
        <Route path="templates/icons/tabler" element={<LazyRoute><TablerIconsShowcase /></LazyRoute>} />
        <Route path="templates/icons/bootstrap" element={<LazyRoute><BootstrapIconsShowcase /></LazyRoute>} />
        <Route path="templates/icons/feather" element={<LazyRoute><FeatherIconsShowcase /></LazyRoute>} />
        <Route path="templates/icons/lucide" element={<LazyRoute><LucideIconsShowcase /></LazyRoute>} />

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
