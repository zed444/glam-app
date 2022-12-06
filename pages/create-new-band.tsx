import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useMutation } from "react-query";
import api from "../utils/api";
import Select from "react-select";
import yearOptions from "../utils/data/yearOptions";
import { ReactSelectOption } from "../@types/common";
import Dropzone from "react-dropzone";
import { useRouter } from "next/router";
import Head from "next/head";

const CreateNewBandPage = () => {
  const router = useRouter();

  type FieldsValue = {
    name: string;
    formedAt: ReactSelectOption;
    info: string;
    image: any;
  };

  const methods = useForm<FieldsValue>({});

  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
    getValues,
  } = methods;

  const { mutateAsync: createBand } = useMutation(
    async (data: FieldsValue) => {
      return api.post("/bands", data);
    },
    {
      onSettled: () => {
        router.push("/bands");
      },
    }
  );

  return (
    <>
      <Head>
        <title>Create New Band</title>
      </Head>
      <main className="container mx-auto py-5 px-96">
        <h1 className="text-lg font-bold h1 mb-10">Create new band</h1>
        <form
          onSubmit={handleSubmit((data: FieldsValue) => {
            createBand(data);
          })}
        >
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("name", { required: true })}
              id="name"
              type="text"
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="formedAt"
            >
              Formed
            </label>
            <Controller
              control={control}
              name="formedAt"
              render={({
                field: { onChange, onBlur, value, name, ref },
                fieldState: { invalid, isTouched, isDirty, error },
                formState,
              }) => (
                <Select
                  options={yearOptions}
                  onChange={(value: any) => setValue("formedAt", value?.label)}
                />
              )}
            />
          </div>
          <div className="mb-3">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="info"
            >
              Info
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full h-48 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              {...register("info", { required: true })}
              id="info"
            ></textarea>
          </div>
          <div>
            <Controller
              control={control}
              name="image"
              render={({
                field: { onChange, onBlur, value, ref },
                formState,
                fieldState,
              }) => (
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    const reader = new FileReader();
                    let image;

                    reader.onloadend = () => {
                      const photo = reader.result;
                      const name = acceptedFiles[0].name;
                      image = { path: photo, name: name };

                      setValue("image", image);
                    };
                    reader.readAsDataURL(acceptedFiles[0]);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section className="bg-white p-3 border border-2 rounded mb-5">
                      <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <label className="p-5 mb-0">Upload photo</label>
                      </div>
                    </section>
                  )}
                </Dropzone>
              )}
            />
          </div>
          <input
            className="bg-red-500 p-3 w-full rounded text-white"
            type="submit"
          />
        </form>
      </main>
    </>
  );
};

export default CreateNewBandPage;
