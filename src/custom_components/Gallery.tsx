import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { GalleryItem } from '@/projectDetails';

function GalleryContainer({ item }: { item: GalleryItem }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [mediaFiles, setMediaFiles] = useState<{ type: string, url: string }[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMediaFiles = async () => {
      try {
        const mediaContext = import.meta.glob('/src/assets/img/**/*.{png,jpg,jpeg,gif,webp,mp4,webm}', { eager: true });
        const mediaUrls = Object.keys(mediaContext)
          .filter(path => path.includes(item.imageDirectory))
          .map(path => {
            const url = (mediaContext[path] as { default: string }).default;
            const type = path.match(/\.(mp4|webm)$/i) ? 'video' : 'image';
            return { type, url };
          });
        setMediaFiles(mediaUrls);
      } catch (error) {
        console.error('Error loading media files:', error);
      }
    };

    loadMediaFiles();
  }, [item.imageDirectory]);

  useEffect(() => {
    if (mediaFiles.length > 0) {
      const advanceSlide = () => {
        setCurrentMediaIndex((prevIndex) => (prevIndex + 1) % mediaFiles.length);
      };

      const currentMedia = mediaFiles[currentMediaIndex];
      if (currentMedia.type === 'image') {
        const timer = setTimeout(advanceSlide, 3000);
        return () => clearTimeout(timer);
      } else if (currentMedia.type === 'video' && videoRef.current) {
        const videoElement = videoRef.current;
        videoElement.onended = advanceSlide;
        return () => {
          videoElement.onended = null;
        };
      }
    }
  }, [mediaFiles, currentMediaIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const readMoreLink = `/projects/${item.title.toLowerCase().replace(/\s+/g, '-')}`;

  const toggleExpand = () => {
    if (isExpanded) {
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="bg-neutral-50 rounded-lg w-full p-5 relative overflow-hidden border border-neutral-50 cursor-pointer"
      onClick={toggleExpand}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
    >
      <div className="flex relative w-full h-[40vh] justify-center">
        {mediaFiles.length > 0 && (
          mediaFiles[currentMediaIndex].type === 'image' ? (
            <img
              src={mediaFiles[currentMediaIndex].url}
              alt={`${item.title} media ${currentMediaIndex + 1}`}
              className="h-full object-contain"
            />
          ) : (
            <video
              ref={videoRef}
              src={mediaFiles[currentMediaIndex].url}
              autoPlay
              muted
              playsInline
              className="h-full object-contain rounded-lg"
            />
          )
        )}
      </div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div 
            className="absolute inset-x-0 bottom-0 bg-white/80 backdrop-blur-sm rounded-[1rem] border border-neutral-100 justify-start items-start px-8 py-6 w-full text-start"
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            exit={{ y: '100%' }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className='flex flex-col font-inter gap-2'>
              <p className='font-medium text-[1.2rem] ml-2'>
                {item.title}
              </p>
              <div className='flex gap-3 lg:gap-4 justify-start items-center'>
                <div className='flex gap-2'>
                  {item.projectType.map((projecttype, index) => (
                    <p key={index} className='bg-white rounded-full border border-neutral-200 py-[3px] px-[8px] lg:py-1 lg:px-3 text-[0.6rem] lg:text-[0.8rem]'>
                      {projecttype}
                    </p>
                  ))}
                </div>
                <p className='text-neutral-500 text-[0.8rem] lg:text-[1rem]'>
                  {item.completionStatus}
                </p>
              </div>
            </div>
            <section className='flex flex-col gap-5'>
              <p className='mt-5 text-[0.8rem] lg:text-[1rem]'>
                {item.description}
              </p>
            </section>
            <div className='flex gap-2 absolute right-6 lg:right-8 top-6'>
              <a 
                href={readMoreLink}
                className='flex rounded-full py-[3px] px-[10px] lg:py-1 lg:px-4 font-light text-[0.6rem] lg:text-[0.8rem] bg-white border border-neutral-50 justify-center items-center'
                onClick={(e) => e.stopPropagation()}
              >
                Read more
              </a>
              <a 
                href={item.websiteLink}
                className='flex rounded-full py-[3px] px-[10px] lg:py-1 lg:px-4 font-light text-[0.6rem] lg:text-[0.8rem] bg-primary text-white justify-center items-center'
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                Visit site
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 w-full mt-[1rem]">
      {items.map((item, index) => (
        <GalleryContainer key={index} item={item} />
      ))}
    </div>
  );
}