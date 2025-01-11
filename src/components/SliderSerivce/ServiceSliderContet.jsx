export default function ServiceSliderContet({
  isLoading,
  image,
  name,
  description,
}) {
  return (
    <div>
      {" "}
      <div className="flex flex-col items-center justify-between p-5 h-[320px] group">
        {isLoading ? (
          <div className="flex justify-center items-center w-full h-[240px]"></div>
        ) : (
          <img
            className="w-full h-[240px] object-cover rounded-lg transition-transform duration-300 ease-in-out transform group-hover:scale-105"
            src={image}
            alt={name}
          />
        )}

        <span className="mt-3 text-white font-bold py-[2px] text-center">
          {name}
        </span>

        <span className="subtext text-sm max-h-0 overflow-hidden group-hover:max-h-[100px] text-white transition-all duration-500 ease-in-out mt-1 text-center">
          {description}
        </span>
      </div>
    </div>
  );
}
