import { users } from "../app";
import { Socket } from "socket.io";

export const connection = (socket: Socket) => {

    socket.on('join', (identifier: string) => {
        !users[identifier] ? users[identifier] = [socket.id] : users[identifier].push(socket.id);
    });
    
    // REQUIRED BINARY SEARCH ALGORITHM PARA DALI MAKITAN ANG DATA
    socket.on('disconnect', () => {
        Object.keys(users).forEach(identifier => {
            const index = users[identifier].findIndex(i => i === socket.id);
            if(index !== -1) {
                users[identifier].splice(index, 1);
                if(users[identifier].length === 0) {
                    delete users[identifier];
                }                
            }
        });
    });
}
