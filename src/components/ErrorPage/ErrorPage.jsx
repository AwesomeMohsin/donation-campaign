import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center">
            <h2>404 Not Found!</h2>
            <Link to='/'><button className="btn btn-primary">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;