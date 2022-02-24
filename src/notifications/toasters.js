import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const errorNotification = (message) => {
	toast.error(message, {
		theme: "colored",
	});
};

export const successNotification = (message) => {
	toast.success(message, {
		theme: "colored",
	});
};
