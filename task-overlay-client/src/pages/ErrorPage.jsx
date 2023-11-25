import { Link } from "react-router-dom";
import bgImg from "../assets/bgImg.jpg";
import errorPageIcon from "../assets/errorPageIcon.png";
import Header from "../components/layouts/Header";
import Footer from "../components/layouts/Footer";

const ErrorPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: "center",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
      className="flex flex-col justify-between w-full"
    >
      <Header />
      <div className="flex justify-center">
        <div className="parent-container">
          <img
            src={errorPageIcon}
            alt="404 not found"
            className="w-1/2 md:w-1/3 mx-auto mt-10"
          />
          <h2 className="mt-10 ">
            Oops! Something went wrong, please try again.
          </h2>
          <Link
            to={"/"}
            className="font-bold text-primary mx-auto mb-5 mt-3 hover:brightness-150"
          >
            ← Back to home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ErrorPage;
