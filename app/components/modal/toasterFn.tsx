import toast from "react-hot-toast";
import CustomToaster from "../PopUp/CustomToaster";

export const ToasterFn = {
    error: (text: string) =>
        toast.custom((t) => (
            <CustomToaster variant="error" t={t}>
                {text}
            </CustomToaster>
        )),
    success: (text: string) => {
        toast.custom((t) => (
            <CustomToaster variant="success" t={t}>
                {text}
            </CustomToaster>
        ));
    },
};
