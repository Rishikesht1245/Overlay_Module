import { Link } from "react-router-dom";
import errorIcon from "../assets/errorIcon.png";

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="parent-container">
        <img
          src={errorIcon}
          alt="404 not found"
          className="w-1/2 md:w-1/3 mx-auto mt-10"
        />
        <h3 className="mt-10">Oops! Page not found.</h3>
        <Link
          to={"/"}
          className="font-bold text-primary mx-auto mb-5 hover:brightness-150"
        >
          ← Back to home
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
