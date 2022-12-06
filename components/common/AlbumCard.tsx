import Link from "next/link";

type Props = {
  link: string;
  title: string;
  band: string;
  year: number;
  cover: {
    path: string;
    title: string;
  };
};

const AlbumCard = (props: Props) => {
  const { link, title, band, year, cover } = props;

  return (
    <Link href={link || "/"}>
      <div className={"border-2 border-gray-300 bg-white"}>
        <div>
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/en/f/fa/Skidrow-st.jpg"
            }
          />
        </div>
        <div className={"p-3"}>
          <h3 className={"font-semibold text-center"}>
            {band} - {title}
          </h3>
          <p className={"text-center"}>({year})</p>
        </div>
      </div>
    </Link>
  );
};

export default AlbumCard;
