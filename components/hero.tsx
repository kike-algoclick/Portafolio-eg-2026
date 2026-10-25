import { Dot } from "lucide-react";
export default function Hero(){
    return (
      <div className="h-[150vh] relative z-20 flex flex-col">
        <div className="w-full flex justify-start p-3">
          <span className=" h-10 flex bg-magenta-accent/20 mt-20 lg:mt-30 lg:ml-20 w-8/9 sm: md:w-5/9 md:max-w-5/9 lg:w-3/9  text-nowrap flex items-center justify-start rounded-full transparent border-1 border-solid border-magenta-accent text-magenta-accent font-mono sm:text-sm">
            <Dot className=" text-magenta-accent animate-pulse scale-240 ml-2 flex" />
            Available for new projects
          </span>
        </div>

        <div className=" mt-2 flex items-center justify-center w-full flex-col ">
          <div className="leftside of hero w-full flex justify-center items-center">
            <div className="w-full flex items-center justify-center flex-col">
              <span className="text-4xl w-6/7 text-magenta-accent font-mono">
                {"<enrique.dev/>"}
              </span>
              <br />
              <p className="w-6/7 font-mono">
                Software Developer Turning ideas into software solutions. I
                build digital experiences through code, creativity and
                problem-solving.
              </p>
            </div>
          </div>

          <div className="rightside of hero"></div>
        </div>
      </div>
    );
}