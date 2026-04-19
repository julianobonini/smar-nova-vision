import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage as BcPage, BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Demo } from './Demo';

export default function BreadcrumbPage() {
  return (
    <Demo title="Breadcrumb">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem><BreadcrumbLink href="#">App</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BreadcrumbLink href="#">Pedidos</BreadcrumbLink></BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem><BcPage>#4821</BcPage></BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </Demo>
  );
}
