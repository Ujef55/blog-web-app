import { useDispatch } from "react-redux"
import authService from "../../../Appwrite/auth"
import { logout } from "../../../features/auth/authSlice"


const LogoutBtn = () => {
    const dispatch = useDispatch();

    const logoutBtnHandler = () => {
        authService.logout().then(() => {
            dispatch(logout);
        })
    }

    return (
        <button>Logout</button>
    )
}

export default LogoutBtn