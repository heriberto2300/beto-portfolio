import Arrow from "../icons/arrow";

const ScrollIndicator = () => {
  return (
    <div className="w-[50px] h-[70px] border-2 border-black rounded-full flex items-center justify-center p-3 hover:scale-90 transition-all">
      <div className="w-full flex items-center animate-pulse">
        <Arrow />
      </div>
    </div>
  );
}

export default ScrollIndicator;