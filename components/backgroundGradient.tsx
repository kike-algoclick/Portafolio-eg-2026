export default function Gradient(){
    return (
      <div className="fixed w-full absolute inset-0 overflow-hidden z-10 ">
        <div
          className="
          absolute rounded-full w-100 h-100 bg-violet-accent blur-[100px] -left-45 -top-45 will-change-transform
          animate-purple-glow
        "
        />

        <div
          className="
          absolute rounded-full w-100 h-100 bg-magenta-accent blur-[100px] -right-55 overflow-hidden -bottom-55 will-change-transform
          animate-green-glow
        "
        />
      </div>
    );
}