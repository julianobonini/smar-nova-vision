import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Demo } from './Demo';

export default function TabsPage() {
  return (
    <Demo title="Tabs">
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">Visão geral</TabsTrigger>
          <TabsTrigger value="history">Histórico</TabsTrigger>
          <TabsTrigger value="settings">Configurações</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="mt-4 text-sm text-muted-foreground">Conteúdo da visão geral.</TabsContent>
        <TabsContent value="history" className="mt-4 text-sm text-muted-foreground">Conteúdo do histórico.</TabsContent>
        <TabsContent value="settings" className="mt-4 text-sm text-muted-foreground">Conteúdo das configurações.</TabsContent>
      </Tabs>
    </Demo>
  );
}
