import { Link } from "react-router-dom";

function Card({ cardImage }) {
  return (
    <>
      {cardImage.map((item, i) => (
        <Link
          to={`/category/${item.id}`}
          key={i}
          state={{ category: item.name }}
          onClick={() => window.scrollTo(0, 0)}
        >
          <div className="flex flex-col gap-3 sm:gap-5 h-full">
            <div className="relative w-full overflow-hidden rounded-[15px] sm:rounded-[20px] aspect-[4/5] group">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <button className="border px-3 py-2 cursor-pointer rounded-[8px] sm:rounded-[10px] hover:bg-black hover:text-white transition-colors text-sm sm:text-base mx-auto sm:mx-0">
              {item.name}
            </button>
            <p className="text-xs sm:text-sm lg:text-base px-2 sm:px-0">{item.title}</p>
          </div>
        </Link>
      ))}
    </>
  );
}

export default Card;
