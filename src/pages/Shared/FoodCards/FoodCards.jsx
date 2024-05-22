import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";


const FoodCards = ({ item }) => {
  const { name, image, recipe, price } = item;

  const {user} = useAuth();
  const navigate = useNavigate();

  const handleAddToCart = food =>{
   if(user && user.email){
    //TODO: send cart item to the database
   }
   else{
    Swal.fire({
      title: "You are not Logged In ",
      text: "Please login to add to the cart!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, login!"
    }).then((result) => {
      if (result.isConfirmed) {
      //  send the user to the login page
      navigate('/login')
      }
    });
   }

  }
  return (
    <div className="card card-compact mb-10 w-full bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-900 text-white">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
          onClick={() => handleAddToCart(item)}
          className="btn btn-outline border-0 border-b-4 mt-4 text-black border-orange-400 bg-slate-100">
            Ad to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCards;