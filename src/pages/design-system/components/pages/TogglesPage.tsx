import { Toggle } from '@/components/ui/toggle';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from 'lucide-react';
import { Demo } from './Demo';

export default function TogglesPage() {
  return (
    <>
      <Demo title="Toggle simples">
        <div className="flex gap-2">
          <Toggle aria-label="Bold"><Bold /></Toggle>
          <Toggle aria-label="Italic"><Italic /></Toggle>
          <Toggle aria-label="Underline"><Underline /></Toggle>
        </div>
      </Demo>

      <Demo title="Toggle group — single">
        <ToggleGroup type="single" defaultValue="left">
          <ToggleGroupItem value="left"><AlignLeft /></ToggleGroupItem>
          <ToggleGroupItem value="center"><AlignCenter /></ToggleGroupItem>
          <ToggleGroupItem value="right"><AlignRight /></ToggleGroupItem>
        </ToggleGroup>
      </Demo>

      <Demo title="Toggle group — multiple">
        <ToggleGroup type="multiple" defaultValue={['bold']}>
          <ToggleGroupItem value="bold"><Bold /></ToggleGroupItem>
          <ToggleGroupItem value="italic"><Italic /></ToggleGroupItem>
          <ToggleGroupItem value="underline"><Underline /></ToggleGroupItem>
        </ToggleGroup>
      </Demo>
    </>
  );
}
