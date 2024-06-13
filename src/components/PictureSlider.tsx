import Arrow from "./icons/arrow.astro";
import { useState } from "preact/hooks";

function usePictures({ pictures }: { pictures: string[] }) {
  const [currentPicture, setCurrentPicture] = useState<string>(pictures[0]);

  const changePicture = (picture: string) => {
    setCurrentPicture(picture);
  }

  return { currentPicture, changePicture }
}

export function PictureSlider({ pictures }: { pictures: string[] }) {
  const { currentPicture, changePicture } = usePictures({ pictures });

  return (
    <div className="w-full sm:w-1/2 select-none">
      <picture className="w-full h-full">
        <img src={currentPicture} alt="project-image" className="w-full rounded-lg" />
      </picture>
      <aside className="w-full flex flex-wrap items-center justify-between mt-5">
        {
          pictures.map((picture, index) => (
            <img
              key={index}
              src={picture}
              alt="picture-image"
              onClick={() => changePicture(picture)}
              className="w-1/5 opacity-50 hover:opacity-100 hover:scale-110 transition-all hover:cursor-pointer rounded-md"
            />
          ))
        }
      </aside>
    </div>
  );
}

