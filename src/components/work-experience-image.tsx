import Image from 'next/image'
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './ui/dialog'

interface WorkExperienceImageProps {
  images: string[]
}

export const WorkExperienceImage = ({ images }: WorkExperienceImageProps) => {
  return (
    <div className="mt-2 flex flex-wrap gap-2">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <button className="group relative">
              <Image
                src={image}
                alt={`Work Experience Image ${index + 1}`}
                className="h-12 w-12 cursor-pointer rounded border border-gray-700 object-cover transition-colors hover:border-gray-500"
                width={48}
                height={48}
              />
            </button>
          </DialogTrigger>
          <DialogContent className="h-full max-h-[90vh] w-4xl max-w-full border-none sm:max-w-full">
            <DialogTitle>Work Experience Image</DialogTitle>
            <Image
              src={image}
              alt={`Work Experience Image ${index + 1}`}
              className="mx-auto max-h-[90vh] max-w-full rounded-lg object-contain"
              width={1000}
              height={1000}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  )
}
