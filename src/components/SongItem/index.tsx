import { Item } from "../../types/service";

export function SongItem({ item }: { item: Item}) {
  return (
    <div>
      <img src={item.thumbnail} style={{width: "100px"}}/>
    </div>
  )

}