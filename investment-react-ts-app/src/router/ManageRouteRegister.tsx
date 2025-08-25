import RegisterCustomer from "../components/customers/RegisterCustomer";
import { RegisterDetails } from "../hooks/useRegisterCustomer";


const ManageRouteRegister = () => {
    const id = sessionStorage.getItem('id');
    const logged = Boolean(id)

    if (logged) {
        const id = sessionStorage.getItem('id')!;
        const firstName = sessionStorage.getItem('firstName')!;
        const lastName = sessionStorage.getItem('lastName')!;
        const phone = sessionStorage.getItem('phone')!;
        const email = sessionStorage.getItem('email')!;

        const details: RegisterDetails = {
            idNumber: id,
            firstName: firstName,
            lastName: lastName,
            phone: phone,
            email: email
        };
        return <RegisterCustomer details={details}/>
    } else {
        return <RegisterCustomer/>
    }
};

export default ManageRouteRegister;