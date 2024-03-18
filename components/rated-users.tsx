import { Rating } from "./ui/rating";
import { IData } from "@/constants/types";

const data: IData[] = [
  {
    name: "Esaosa Bolaji",
    rating: 4,
  },
  {
    name: "Efik Ayo",
    rating: 4,
  },
  {
    name: "Tolani Chelsea",
    rating: 3,
  },
  {
    name: "Amala Moon",
    rating: 5,
  },
];

export function RatedUsers() {
  return (
    <div className="space-y-8 p-2">
      {data &&
        data.map((item: IData, key: number) => {
          return (
            <div key={key} className="flex items-center justify-between">
              <div className="flex items-center space-x-1">
                <img
                  src="/avatar.png"
                  className="w-[30px] h-[30px] rounded-full"
                />
                <p className="text-sm text-left">{item.name}</p>
              </div>
              {item.profession && (
                <p className="text-sm font-[200]">{item.profession}</p>
              )}
              <div className="flex space-x-1 items-center">
                <Rating size={item.rating} />
                <span className="text-[#276e59] text-sm font-semibold">
                  {item.rating}/5
                </span>
              </div>
            </div>
          );
        })}
    </div>
  );
}
