import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
@Injectable()
export class AppService {

  constructor(@Inject('MAIL_SERVICE') private clientMail: ClientProxy) {}

  getHello(): string {
    return 'Soy el app principal, en puerto 3000';
  }


  newUser(user:any) {
    this.clientMail.emit('new_mail', user);
    return 'send_queve';
  }
}