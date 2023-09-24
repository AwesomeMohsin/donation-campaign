import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar pt-12 bg-base-100">
            <div className="flex-1">
                <img className="w-1/5" src="/src/assets/resources/Logo.png" alt="" />
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1 gap-12 text-lg">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='donation'>Donation</NavLink>
                    <NavLink to='statistics'>Statistics</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
