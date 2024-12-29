import { helix } from "ldrs";

export default function BanerSkeleton() {
  helix.register();

  // Default values shown

  return (
    <div>
      <div className="bg-[#292929]  border  border-[#D7FD44] h-[6.25rem]   flex px-10 justify-center items-center gap-3">
        <l-helix size="45" speed="2.5" color="#D7FD44"></l-helix>
      </div>
    </div>
  );
}
