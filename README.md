# Demo App: Change Detection, Signals, & RxJS
This demo app is built to explain how Angular's change detection mechanism works, what it means to go zoneless (removing dependency on zone.js), how to implement state using signals only, and showcase basic RxJS integration.

---

## Features
Increment and decrement counter buttons with instant feedback

Counter resets to 0 automatically after 4 seconds

An input box for entering messages; multiple messages can be displayed

All state managed via Angular signals

Reactive updates with no zone.js, demonstrating a zoneless architecture

Simple RxJS logic

---

## Core Concepts
Change Detection Mechanism
The app demonstrates how Angular binds state to its templates and efficiently updates views by reacting to changes—specifically, how signals enable fine-grained, targeted change detection without traversing the entire component tree.

Zoneless Angular
This project is configured to work without relying on zone.js for automatic change detection. Instead, signals are used for local, granular state updates and view refreshes.

Signals-Only State
All reactive state (counter, messages) is handled using Angular's new signal API, making the app lightweight and performant with clear, straightforward update logic.

Basic RxJS Use
RxJS timers are used to display text outputs, showing how to use Observables for asynchronous operations in Angular.

---

## How It Works
The counter can be incremented or decremented with dedicated buttons.

After four seconds, the counter value resets—this uses an RxJS timer triggered on change.

Enter any message in the input box; submitted messages appear in a list.

You can enter multiple messages and see them all at once.

---

## Educational Value
This demo serves as a reference for:

Understanding Angular's new local change detection model with signals

Building applications without zone.js

Using signals as the only source of state

Incorporating RxJS Observables alongside signal-based state for events
