import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const invalidCredentialsNotification = () => {
	toast.error("Invalid credentials", {
		theme: "colored",
	});
};

export const serverErrorNotification = () => {
	toast.error("An unexpected error occured", {
		theme: "colored",
	});
};
