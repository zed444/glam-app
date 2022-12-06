import ButtonAdd from "../../components/ButtonAdd";
import AlbumCard from "../../components/common/AlbumCard";
import Navbar from "../../components/Navbar";
import paginationTheme from "../../styles/Pagination.module.scss";
import Pagination from "@etchteam/next-pagination";
import Head from 'next/head';


const AlbumsListPage = () => {
  const albums = {
    totalPages: 100,
  };

  return (
    <>
    <Head>
      <title>List of Albums</title>
    </Head>
      <div className="bg-gray-800 py-5 mb-5">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Albums
        </h1>
        <form className="container mx-auto">
          <div className="flex justify-between items-center">
            <ButtonAdd link={"/create-new-album"} text={"Add New Album"} />
            <select className="rounded-full">
              <option value="name-asc">Name ASC</option>
              <option value="name-desc">Name DESC</option>
              <option value="year-asc">Year ASC</option>
              <option value="year-desc">Year DESC</option>
            </select>
          </div>
        </form>
      </div>
      <main className={"container mx-auto"}>
        <div className="mb-10">
          <Pagination total={albums.totalPages} theme={paginationTheme} />
        </div>
        <div className={"grid gap-5 grid-cols-2 lg:grid-cols-5 "}>
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>{" "}
          <div className="flex justify-center items-center">
            <AlbumCard
              title={"Skid Row"}
              link={""}
              band={"Skid Row"}
              year={1989}
              cover={{
                path: "",
                title: "",
              }}
            />
          </div>
        </div>
      </main>
    </>
  );
};

export default AlbumsListPage;
