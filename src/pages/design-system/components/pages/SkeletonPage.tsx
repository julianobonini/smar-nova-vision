import { Skeleton } from '@/components/ui/skeleton';
import { Demo } from './Demo';

export default function SkeletonPage() {
  return (
    <>
      <Demo title="Card loading">
        <div className="flex items-center gap-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </Demo>

      <Demo title="Lista">
        <div className="space-y-2">
          <Skeleton className="h-6 w-full" />
          <Skeleton className="h-6 w-11/12" />
          <Skeleton className="h-6 w-10/12" />
        </div>
      </Demo>
    </>
  );
}
