import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DestroyRef, inject, input, OnInit } from '@angular/core';
import { AsyncPipe } from '@angular/common';

import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-messages-list',
  standalone: true,
  imports: [ AsyncPipe],
  templateUrl: './messages-list.component.html',
  styleUrl: './messages-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush //On-push strategy
})
export class MessagesListComponent{
  // messages = input.required<string[]>(); usage of service 

  // messages = this.messagesService.allMessages;

  // get messages() {
  //  return this.messagesService.allMessages
  // } cuz we are triggering change detection manually

  private messagesService = inject(MessagesService)
  messages$ = this.messagesService.messages$; //more shorter of reading the emiited values form rxJs and using async in the template
 

  get debugOutput() {
    console.log('[MessagesList] "debugOutput" binding re-evaluated.');
    return 'MessagesList Component Debug Output';
  }

    // long-way approach( seting up manually)

   // private cdRef = inject(ChangeDetectorRef); //Rxjs
  // private destroyRef = inject(DestroyRef);
  //  // destroying the component if the component gets removed
  // messages: string[] = []

  // ngOnInit() {
  //   //messageservice.messages$ is the observable

  //   const subscription = this.messagesService.messages$.subscribe((message) => {
  //     this.messages = message; 
  // // this message paramter gets the value from the next() from services
  //     this.cdRef.markForCheck(); 
  // // this only triggeres cd manually ,Since the new messages come from an Observable (not an Input)
  //   } )
  //     this.destroyRef.onDestroy(() => {
  //       subscription.unsubscribe(); 
  // // to clean-up or unsubscribe the enabled subscription
  //     })
  // }
}
