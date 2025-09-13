import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
    //signals of adding message and storing the initial message
//     private messages = signal<string[]>([]);
//     allMessages = this.messages.asReadonly();

//   addMessage(message: string) {
//     this.messages.update((prevMessages) => [...prevMessages, message]);
//   }


  messages$ = new BehaviorSubject<string []>([]) // Rxjs 
  private messages: string[] = []

  get allMessages() {
    return [...this.messages];
  }

  addMessage(message: string){
    this.messages = [...this.messages, message]
    this.messages$.next([...this.messages]); //Rxjs next is used to add  new value  and creates new array instead of altering the old one by the spread operator
  }
  
}