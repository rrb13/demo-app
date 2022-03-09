import "./listPhoto.css";

export default function ListPhoto({entry}) {
  return (
    <li className="entries">
      <div className="entriesImgContainer">
        <img className="entriesImg" src={entry.photo} alt="" />
      </div>
    </li>
  );
}