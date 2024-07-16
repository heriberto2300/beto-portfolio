const BoxesSpin = () => {
  return (
    <div className="w-full px-[200px] h-full absolute overflow-hidden">
      <div className="w-full h-full relative">
        <div className="w-[420px] h-[450px] animate-spin-slow overflow-hidden border-black border-2 opacity-15 absolute m-auto top-56 right-16" />
        <div className="w-[420px] h-[450px] animate-spin-slow-reverse overflow-hidden border-black border-2 opacity-15 absolute m-auto top-56 right-16" />
      </div>
    </div>
  );
};

export default BoxesSpin;