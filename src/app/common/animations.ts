import {
  animate,
  group,
  query,
  state,
  style,
  transition,
  trigger
  } from '@angular/animations';

export function routerTransition() {
  return trigger('routerAnimation', [
    // LEFT TO RIGHT AKA RESET
    transition('* => 0', [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)'
        }), { optional: true }),
      // move page off screen right on leave
      query(':leave',
        animate('500ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(100%)',
          })
        ), { optional: true }),
      // move page in screen from left to right
      query(':enter',
        animate('500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0%)'
          })
        ), { optional: true }),
    ]),
    // LEFT TO RIGHT AKA PREVIOUS
    transition('* => 1', [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-100%)'
        }), { optional: true }),
      // move page off screen right on leave
      query(':leave',
        animate('500ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(100%)',
          })
        ), { optional: true }),
      // move page in screen from left to right
      query(':enter',
        animate('500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0%)'
          })
        ), { optional: true }),
    ]),
    // RIGHT TO LEFT AKA NEXT
    transition('* => 2', [
      // Initial state of new route
      query(':enter',
        style({
          position: 'fixed',
          width: '100%',
          transform: 'translateX(100%)'
        }), { optional: true }),
      // move page off screen right on leave
      query(':leave',
        animate('500ms ease',
          style({
            position: 'fixed',
            width: '100%',
            transform: 'translateX(-100%)',
          })
        ), { optional: true }),
      // move page in screen from left to right
      query(':enter',
        animate('500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(0%)'
          })
        ), { optional: true }),
    ])
  ]);
}
