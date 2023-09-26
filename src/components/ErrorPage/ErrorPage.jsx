import { Link } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

const ErrorPage = () => {
    return (
        
        <div className="text-center py-60">
            <h2 className="text-6xl pb-8">404 Not Found!</h2>
            <Link to='/'><button className="btn btn-outline">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;