import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="text-center pt-96">
            <h2 className="text-6xl pb-8">404 Not Found!</h2>
            <Link to='/'><button className="btn btn-outline btn-accent">Back to Home</button></Link>
        </div>
    );
};

export default ErrorPage;