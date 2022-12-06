import {
  Controller,
  FormProvider,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { useMutation } from "react-query";
import Select from "react-select";
import api from "../utils/api";
import yearOptions from "../utils/data/yearOptions";

const CreateNewAlbumPage = () => {
  const methods = useForm<any>();

  const {
    register,
    control,
    setValue,
    watch,
    formState: { errors },
    handleSubmit,
  } = methods;

  const { mutateAsync: createAlbum } = useMutation((data: any) => {
    return api.post("/albums", data);
  });

  const {
    fields: songs,
    append: appendSong,
    remove: removeSong,
  } = useFieldArray({
    control,
    name: "song",
  });
  return (
    <main className="container mx-auto py-5 px-96">
      <h1 className="text-lg font-bold h1 mb-10">Create new album</h1>
      <form
        onSubmit={handleSubmit((data: any) => {
          createAlbum(data);
        })}
      >
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("title", { required: true })}
            id="title"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="artist"
          >
            Band/Artist
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("artist", { required: true })}
            id="artist"
            type="text"
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="year"
          >
            Year
          </label>
          <Controller
            control={control}
            name="year"
            render={({
              field: { onChange, onBlur, value, name, ref },
              fieldState: { invalid, isTouched, isDirty, error },
              formState,
            }) => (
              <Select
                options={yearOptions}
                onChange={(value) => setValue("year", value?.label)}
              />
            )}
          />
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="format"
          >
            Format
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="format"
            {...register("name", { required: true })}
          >
            <option value={"LP"}>LP</option>
            <option value={"EP"}>EP</option>
          </select>
        </div>
        <div className="mb-3">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="recordLabel"
          >
            Record label
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            {...register("recordLabel", { required: true })}
            id="recordLabel"
            type="text"
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
          <div className={"grid gap-5 grid-cols-6"}>
            <p className="col-span-4 text-gray-700 text-sm font-bold mb-2">
              Title
            </p>
            <p className="text-gray-700 text-sm text-center font-bold mb-2">
              Duration
            </p>
          </div>
          {songs.map((field, index) => (
            <div className={"grid gap-5 grid-cols-6 mb-2"} key={field.id}>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 col-span-4 leading-tight focus:outline-none focus:shadow-outline"
                {...register(`songs.${index}.title`)}
                type="text"
              />
              <input
                className="text-center shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register(`songs.${index}.duration`)}
                type="text"
                placeholder="mm:ss"
              />
              <div
                className="flex justify-center align-center rounded bg-red-500 text-white"
                onClick={() => removeSong(index)}
              >
                <span> - Remove</span>
              </div>
            </div>
          ))}
          <div className="text-red-500 mb-5" onClick={appendSong}>
            + Add song
          </div>
        </div>
        <input
          className="bg-red-500 p-3 w-full rounded text-white"
          type="submit"
        />
      </form>
    </main>
  );
};

export default CreateNewAlbumPage;
