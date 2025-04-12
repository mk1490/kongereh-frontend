import {App} from "vue";
import {io} from "socket.io-client";

let socket = null;
export const registerSocket = (serverAddress: string) => {
    socket = new io(serverAddress, {
        path: '/api/events'
    })
}
export {socket}

export const socketInstance = () => {
    return socket;
};