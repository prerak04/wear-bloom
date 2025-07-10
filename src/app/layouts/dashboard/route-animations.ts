import {
  trigger,
  transition,
  style,
  animate,
  query,
  group,
} from '@angular/animations';

export const fadeInOutAnimation = trigger('fadeInOutAnimation', [
  transition('* <=> *', [
    query(
      ':enter, :leave',
      [
        style({
          position: 'absolute',
          width: '100%',
          opacity: 0,
        }),
      ],
      { optional: true }
    ),
    group([
      query(
        ':leave',
        [style({ opacity: 1 }), animate('300ms ease', style({ opacity: 0 }))],
        { optional: true }
      ),
      query(
        ':enter',
        [style({ opacity: 0 }), animate('300ms ease', style({ opacity: 1 }))],
        { optional: true }
      ),
    ]),
  ]),
]);
