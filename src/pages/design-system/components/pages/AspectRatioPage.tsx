import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Demo } from './Demo';

export default function AspectRatioPage() {
  return (
    <Demo title="Aspect Ratio 16/9">
      <div className="max-w-md">
        <AspectRatio ratio={16 / 9} className="bg-primary/10 rounded-xl grid place-items-center text-sm text-primary font-semibold">
          16 / 9
        </AspectRatio>
      </div>
    </Demo>
  );
}
