import HomeCustomer from "../components/customers/HomeCustomer";
import Home from "../components/home/Home";


const ManageRouteHome = () => {
    const id = sessionStorage.getItem('id')
    const logged = Boolean(id)

    if (logged) {
        return <HomeCustomer/>
    } else {
        return <Home/>
    }
};

export default ManageRouteHome;