import Typewriter from "typewriter-effect";

const Announcement = () => {
  return (
    // Replaced 'text-white' with 'force-white' to win the CSS specificity battle
    <div className="flex items-center justify-center bg-[#e9acd9] text-white text-[18px] font-semibold h-[30px]">
      <Typewriter
        options={{
          strings: ["Beauty", "Bliss", "Everything", "on", "Discount", "20% off"],
          autoStart: true,
          loop: true,
          delay: 40,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
};

export default Announcement;