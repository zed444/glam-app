import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { dehydrate, useQuery } from "react-query";
import ButtonAdd from "../../components/ButtonAdd";
import RecordLabelCard from "../../components/common/RecordLabelCard";
import getQueryClient from "../../utils/queryClient";

const RecordLabelsListPage = () => {
  const router = useRouter();

  const { data: recordLabels } = useQuery<any>(
    ["record-labels", { params: router?.query }],
    {
      refetchOnWindowFocus: true,
    }
  );

  const renderRecordLabels = recordLabels?.docs?.map((recordLabel: any) => {
    return (
      <RecordLabelCard
        id={recordLabel.id}
        name={recordLabel.name}
        formedAt={recordLabel.formedAt}
        image={recordLabel.image}
      />
    );
  });

  return (
    <>
      <div className="bg-gray-800 py-5 mb-5">
        <h1 className="text-3xl font-bold text-center text-white mb-2">
          Record Labels
        </h1>
        <form className="container mx-auto">
          <div className="flex justify-between items-center">
            <ButtonAdd
              link={"/create-new-record-label"}
              text={"Add New Record Label"}
            />
            <select className="rounded-full">
              <option value="name-asc">Name ASC</option>
              <option value="name-desc">Name DESC</option>
              <option value="year-asc">Year ASC</option>
              <option value="year-desc">Year DESC</option>
            </select>
          </div>
        </form>
      </div>
      <div className="container mx-auto">
        <div>
          <RecordLabelCard
            id={""}
            name={"Atlantic Records"}
            formedAt={"1965"}
            city={""}
            country={""}
          />
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

  await queryClient.fetchQuery(["record-labels", { params: query }]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export default RecordLabelsListPage;
