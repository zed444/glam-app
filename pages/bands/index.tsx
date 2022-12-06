import { GetServerSideProps } from "next";
import { dehydrate, useQuery } from "react-query";
import { IBand } from "../../@types/band";
import getQueryClient from "../../utils/queryClient";
import BandCard from "../../components/common/BandCard";
import ButtonAdd from "../../components/ButtonAdd";
import Navbar from "../../components/Navbar";
import Pagination from "@etchteam/next-pagination";
import { useRouter } from "next/router";
import paginationTheme from "../../styles/Pagination.module.scss";
import Head from "next/head";

const BandsListPage = () => {
  const router = useRouter();

  const { data: bands } = useQuery<any>(["bands", { params: router?.query }], {
    refetchOnWindowFocus: true,
  });

  const renderBands = bands?.docs?.map((band: any) => {
    return (
      <BandCard
        id={band.id}
        name={band.name}
        formedAt={band.formedAt}
        image={band.image}
      />
    );
  });

  return (
    <>
      <Head>
        <title>List of Bands</title>
      </Head>
      <div className="bg-gray-800 py-5 mb-5">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Bands / Artists
        </h1>
        <form className="container mx-auto">
          <div className="flex justify-between items-center">
            <ButtonAdd link={"/create-new-band"} text={"Add New Band"} />
            <select className="rounded-full">
              <option value="name-asc">Name ASC</option>
              <option value="name-desc">Name DESC</option>
              <option value="year-asc">Year ASC</option>
              <option value="year-desc">Year DESC</option>
            </select>
          </div>
        </form>
      </div>
      <div className={"container mx-auto"}>
        <div className="mb-10">
          <Pagination total={bands.totalPages} theme={paginationTheme} />
        </div>
        <div
          className={
            "grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
          }
        >
          {renderBands}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  query,
}: any) => {
  const queryClient = getQueryClient();

  await queryClient.fetchQuery(["bands", { params: query }]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BandsListPage;
