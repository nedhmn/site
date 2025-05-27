import { DialogTitle } from '@radix-ui/react-dialog'
import { ImageIcon } from 'lucide-react'
import Image from 'next/image'
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog'

interface WorkExperienceImageProps {
  images: string[]
}

export const WorkExperienceImage = ({ images }: WorkExperienceImageProps) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {images.map((image, index) => (
        <Dialog key={index} modal={false}>
          <DialogTrigger asChild>
            <button className="group relative">
              <Image
                src={image}
                alt={`Work Experience Image ${index + 1}`}
                className="h-12 w-12 rounded border border-gray-800 object-cover transition-colors hover:border-gray-400 dark:border-zinc-800 dark:hover:border-zinc-600"
                width={48}
                height={48}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded bg-black/40 transition-all duration-200 group-hover:bg-black/30">
                <ImageIcon size={16} className="text-white" />
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="flex max-h-[90vh] max-w-[90vw] justify-center border-none p-0 sm:max-w-[90vw]">
            <DialogTitle className="hidden"></DialogTitle>
            <Image
              src={image}
              alt={`Work Experience Image ${index + 1}`}
              className="h-auto max-h-[90vh] w-auto max-w-[90vw] object-contain"
              width={0}
              height={0}
              sizes="90vw"
              quality={100}
              unoptimized={true}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
