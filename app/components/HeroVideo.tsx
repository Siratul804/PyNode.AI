import HeroVideoDialog from "./ui/hero-video-dialog";

export const HeroVideo = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold md:p-0 p-5 ">
          Experience PyNode.AI in Action
        </h1>
      </div>
      <div className="flex justify-center pb-4 ">
        <p className="text-sm py-1 md:p-0 p-5 ">
          Watch a quick demo of seamless coding and AI-powered assistance.
        </p>
      </div>

      <div className=" flex justify-center ">
        <HeroVideoDialog
          className="w-full md:w-3/4 lg:w-2/3"
          animationStyle="top-in-bottom-out"
          videoSrc="https://video.gumlet.io/67874608a0795ccd0d9ce474/67874673a0795ccd0d9ce60e/download.mp4"
          thumbnailSrc="/thum.png"
          thumbnailAlt="Hero Video"
        />
      </div>
    </>
  );
};
