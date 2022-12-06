import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, useQuery } from "react-query";
import getQueryClient from "../../utils/queryClient";
import Navbar from "../../components/Navbar";
import Head from 'next/head';

const BandPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const a =
    "https://www.gannett-cdn.com/media/Phoenix/Phoenix/2014/07/15/1405461691000-phxdc5-6g69q2om5hsvjmf56ei-original-1-.jpg";

  const { data: band } = useQuery<any>(
    [`bands/${id}`, { params: router?.query }],
    {
      refetchOnWindowFocus: true,
    }
  );

  console.log(band);

  return (
    <>
    <Head>
      <title>{band?.name}</title>
    </Head>
      <div className="container mx-auto pt-10">
        <div className="mb-5">
          {!band?.image && (
            <div className="h-48 w-48 rounded-full overflow-hidden">
              <div
                className="h-48 w-48 background-image rounded-full"
                style={{ backgroundImage: `url(${a})` }}
              ></div>
            </div>
          )}
          {band?.image && (
            <div className="h-48 w-48 rounded-full overflow-hidden">
              <div
                className="h-48 w-48 background-image rounded-full"
                style={{ backgroundImage: `url(${band?.image?.path})` }}
              ></div>
            </div>
          )}
        </div>
        <h2 className="text-3xl font-bold mb-5">{band?.name}</h2>
        <div className="mb-3">
          <h3 className="text-xl font-bold">Formed:</h3>
          <p>{band?.formedAt ? band?.formedAt : "unknown"}</p>
        </div>
        <div className="mb-3">
          <h3 className="text-xl font-bold">Info:</h3>
          <p>{band?.info}</p>
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
  const { id } = query;

  const queryClient = getQueryClient();

  await queryClient.fetchQuery([`bands/${id}`]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default BandPage;
