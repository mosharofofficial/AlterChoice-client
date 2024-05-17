import { useContext } from "react";
import { authContext } from "../Authentication/AuthProvider";
import myAxios from "../../axios.config";
import Swal from "sweetalert2";

const AddQueries = () => {
  const { user } = useContext(authContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const productName = form.productName.value;
    const brandName = form.brandName.value;
    const productImage = form.productImage.value;
    const queryTile = form.queryTile.value;
    const boycottReason = form.boycottReason.value;

    const email = user.email;
    const name = user.displayName;
    const userImage = user.photoURL;
    const dateTime = Date.now();
    const recommendationCount = 0;

    const query = {
      productName,
      brandName,
      productImage,
      queryTile,
      boycottReason,
      email,
      name,
      userImage,
      dateTime,
      recommendationCount,
    };

    // console.log(query);

    myAxios
      .post("/addQuery", query)
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Query added successfully!",
            icon: "success",
          });
          form.reset();
        }
      })
      .catch((e) => console.log(e));
  };

  return (
    <div className="flex flex-col items-center my-5 sm:my-10">
      <form
        onSubmit={handleSubmit}
        className=" my-4 bg-veryLightBlue p-2 rounded-xl sm:p-10"
      >
        <h1 className="text-2xl font-bold mb-4">Add Query : </h1>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Product Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="productName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Brand Name :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="brandName"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Product Image :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="productImage"
          />
        </label>
        <label className="py-3 flex flex-row items-center gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold ">
          Query Title :
          <input
            className="bg-transparent  placeholder:text-darkBlue focus:outline-none flex-1 border-b-2 border-superDarkBlue "
            type="text"
            name="queryTile"
          />
        </label>
        <label className="py-3 px-4 flex flex-col items-start gap-3 text-superDarkBlue text-lg flex-nowrap w-[400px] sm:w-[500px] font-semibold">
          Boycotting Reason :
          <textarea
            className="resize-none bg-transparent  placeholder:text-darkBlue focus:outline-none  p-3 rounded-xl border-2 border-superDarkBlue w-full h-36"
            type="text"
            name="boycottReason"
          />
        </label>
        <div className="w-full flex justify-center">
          <button
            // onClick={(e) => e.preventDefault()}
            className="button btn w-[200px] "
          >
            Add Query
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddQueries;
