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
        <Dialog key={index}>
          <DialogTrigger asChild>
            <button className="group relative rounded border border-gray-800 object-cover transition-colors hover:border-gray-400 dark:border-zinc-800 dark:hover:border-zinc-600">
              <Image
                src={image}
                alt={`Work Experience Image ${index + 1}`}
                className="h-12 w-12"
                width={48}
                height={48}
              />
              <div className="absolute inset-0 flex items-center justify-center rounded bg-black/40 transition-all duration-200 group-hover:bg-black/30">
                <ImageIcon size={16} className="text-white" />
              </div>
            </button>
          </DialogTrigger>
          <DialogContent className="flex h-full max-h-[80vh] justify-center border-none sm:max-w-full">
            <DialogTitle className="hidden"></DialogTitle>
            <Image
              src={image}
              alt={`Work Experience Image ${index + 1}`}
              className="mx-auto max-h-[90vh] max-w-full rounded-lg object-contain"
              fill={true}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
