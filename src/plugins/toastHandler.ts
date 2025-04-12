import {App} from "vue";
import {useToast} from "vue-toast-notification";


const toast = useToast()


export const addItemSuccess = () => {
    toast.success('افزودن آیتم با موفقیت انجام شد');
}

export const success = (message: string) => {
    toast.success(message);
}

export const error = (message: string) => {
    toast.error(message);
}