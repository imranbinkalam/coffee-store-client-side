import Swal from "sweetalert2";
const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const quantity = form.quantity.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const newCoffee = {
      name,
      quantity,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    console.log(newCoffee);
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          form.reset();
          Swal.fire({
            title: "Success!",
            text: "Coffee updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-[#F4f3F0] p-24">
      <h2 className="text-3xl font-extrabold">Add Coffee</h2>
      <form onSubmit={handleAddCoffee}>
        {/* form name ans quantity row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Coffee Name
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                name="name"
                placeholder="Add coffee name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Available Quantity
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                name="quantity"
                placeholder="available quantity"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form supplier row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Supplier Name
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">taste</span>
            </label>
            <label className="label">
              <input
                type="text"
                name="taste"
                placeholder="taste"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form category and details row */}
        <div className="md:flex mb-5">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text  font-semibold text-lg">
                Category
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                name="category"
                placeholder="Add Category"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text font-semibold text-lg">Details</span>
            </label>
            <label className="label">
              <input
                type="text"
                name="details"
                placeholder="Details"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        {/* form photo url row */}
        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold text-lg">
                Photo URL
              </span>
            </label>
            <label className="label">
              <input
                type="text"
                name="photo"
                placeholder="Add Photo URL"
                className="input input-bordered rounded-md w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add coffee" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddCoffee;
