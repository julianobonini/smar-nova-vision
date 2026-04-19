import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import { Demo } from './Demo';

export default function SliderPage() {
  return (
    <>
      <Demo title="Slider single">
        <div className="space-y-3 max-w-md">
          <Label>Volume</Label>
          <Slider defaultValue={[50]} max={100} step={1} />
        </div>
      </Demo>
      <Demo title="Slider range">
        <div className="space-y-3 max-w-md">
          <Label>Faixa de preço</Label>
          <Slider defaultValue={[20, 80]} max={100} step={1} />
        </div>
      </Demo>
    </>
  );
}
