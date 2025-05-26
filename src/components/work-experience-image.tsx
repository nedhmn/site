import Image from "next/image";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./ui/dialog";

interface WorkExperienceImageProps {
  images: string[];
}

export const WorkExperienceImage = ({ images }: WorkExperienceImageProps) => {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {images.map((image, index) => (
        <Dialog key={index}>
          <DialogTrigger asChild>
            <button className="group relative">
              <Image
                src={image}
                alt={`Work Experience Image ${index + 1}`}
                className="object-cover w-12 h-12 rounded border border-gray-700 hover:border-gray-500 transition-colors cursor-pointer"
                width={48}
                height={48}
              />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-full sm:max-w-full w-4xl max-h-[90vh] h-full border-none">
            <DialogTitle>Work Experience Image</DialogTitle>
            <Image
              src={image}
              alt={`Work Experience Image ${index + 1}`}
              className="max-w-full max-h-[90vh] object-contain rounded-lg mx-auto"
              width={1000}
              height={1000}
            />
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
};
