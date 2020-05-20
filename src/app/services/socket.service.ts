import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private url = 'http://173.82.106.105/';
  private socket;
  constructor() {}

  /**
   * Creating a socket connection
   */
  createSocket = () => {
    this.socket = io(this.url, {
      secure: true,
      reconnectionDelay: 3000,
      reconnectionAttempts: 3,
    });
    this.socket.on('connect', () => {
      console.log('========Socket Initialized==========');
    });

    this.socket.on('connect_error', (error) => {
      console.error('Socket connection error', error);
    });

    this.socket.on('disconnect', (reason) => {
      console.log('reason for disconnect', reason);
    });
  };

  // Sending messageing to the server
  sendMessage = (title, message) => {
    this.socket.emit(title, message);
  };

  //  Getting replies from the server
  public getMessages = (title): Observable<any> => {
    if (this.socket) {
      return Observable.create((observer) => {
        this.socket.on(title, (message) => {
          observer.next(message);
        });
      });
    }
  };
}
