import { io } from "socket.io-client";


export const socket = io("https://egoras-v3-staging.egoras.com",  {

autoConnect: true,
}
);
