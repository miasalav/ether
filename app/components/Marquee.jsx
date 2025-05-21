const Marquee = () => {
    return (
      <div className="overflow-hidden whitespace-nowrap py-2 w-[150px]">
        <div className="animate-marquee inline-block">
          <span className="mx-8 text-sm uppercase tracking-tightest text-white font-bold">
            PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ 
          </span>
          <span className="mx-8 text-sm uppercase tracking-tightest text-white font-bold">
            PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ PAST EVENTS ☆ 
          </span>
        </div>
      </div>
    );
  };
  
  export default Marquee;
  