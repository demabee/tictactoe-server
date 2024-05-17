import { SocketControllers } from 'socket-controllers';
import { Server } from 'socket.io';
import { Container } from 'typedi';

export default (httpServer: any) => {
  // const io = new Server(httpServer, {
  //   cors: {
  //     origin: '*'
  //   },
  // });

  const io = new SocketControllers({
    port: 4001,
    controllers: [__dirname + '/api/controllers/*.ts'],
    container: Container
  });

  return io;
}
