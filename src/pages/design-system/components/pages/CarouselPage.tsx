import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from '@/components/ui/carousel';
import { Demo } from './Demo';

export default function CarouselPage() {
  return (
    <Demo title="Carousel (embla)">
      <div className="px-12">
        <Carousel className="max-w-md">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, i) => (
              <CarouselItem key={i}>
                <div className="aspect-video rounded-xl bg-primary/10 grid place-items-center text-primary text-2xl font-display font-bold">
                  Slide {i + 1}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </Demo>
  );
}
