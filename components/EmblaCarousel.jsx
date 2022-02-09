import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Card from './Card';
import { NextButton, PrevButton } from './EmblaCarouselButtons';

const course = [
  {
    slug: '/',
    title: 'First',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Second',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Third',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Fourth',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Fifth',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Sixth',
    username: 'Granko',
  },
  {
    slug: '/',
    title: 'Seventh',
    username: 'Granko',
  },
];

export const EmblaCarousel = () => {
  const [emblaRef, embla] = useEmblaCarousel({ align: 'start', slidesToScroll: 3, loop: true, draggable: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);

  const onSelect = useCallback(() => {
    if (!embla) return;
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <div className="relative">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container">
          {course.map((item) => (
            <div key={item.title} className="embla__slide">
              <Card course={item} />
            </div>
          ))}
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
    </div>
  );
};
