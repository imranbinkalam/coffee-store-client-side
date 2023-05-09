import { AiFillEye, AiFillEdit, AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, quantity, supplier, taste, photo } = coffee;

  const handleDelete = (_id) => {
    //     console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Coffee has been deleted.", "success");
            }
            const remaining = coffees.filter((cof) => cof._id !== _id);
            setCoffees(remaining);
          });
      }
    });
  };
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img src={photo} alt="Movie" />
      </figure>
      <div className="flex justify-between w-full pr-4 items-center p-4">
        <div className="space-y-3">
          <h2 className="card-title">{name}</h2>
          <p>Quantity: {quantity}</p>
          <p>Supplier: {supplier}</p>
          <p>Taste: {taste}</p>
        </div>
        <div className="card-actions justify-end">
          <div className="btn-group btn-group-vertical space-y-3">
            <button className="btn text-white bg-[#D2B48C]">
              <AiFillEye className="w-4 h-4"></AiFillEye>
            </button>
            <Link to={`updateCoffee/${_id}`}>
              <button className="btn text-white bg-[#3C393B] hover:bg-red-500">
                <AiFillEdit className="w-4 h-4"></AiFillEdit>
              </button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn text-white bg-[#EA4744]"
            >
              <AiFillDelete className="w-4 h-4"></AiFillDelete>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
