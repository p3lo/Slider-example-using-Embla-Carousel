import Image from 'next/image';
import { AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';

const Card = ({ course }) => {
  return (
    <Link href={`${course.slug}`}>
      <a>
        <div className="relative space-y-1 h-[320px] w-[240px] cursor-pointer hover:shadow-md hover:shadow-gray-800 group">
          <div className="h-40 overflow-hidden border border-gray-500 w-60 group-hover:opacity-50">
            <Image
              src="https://lmg-labmanager.s3.amazonaws.com/assets/articleNo/22392/aImg/41531/ni-and-v-sample-results-in-less-than-5-minutes-m.webp"
              alt={course.title}
              width={240}
              height={160}
              objectFit="cover"
            />
          </div>
          <div className="px-1 space-y-1">
            <h2 className="font-bold break-normal text-md line-clamp-2">{course.title}</h2>
            <h3 className="text-xs text-gray-400">{course.username}</h3>
            <div className="flex items-center gap-1 text-gray-400">
              <AiOutlineEye className="w-3 h-3" />
              <h3 className="text-xs">(0)</h3>
            </div>
            <h2 className="absolute p-1 text-xs font-bold text-red-800 bg-red-200 bottom-2">Bestseller</h2>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default Card;
