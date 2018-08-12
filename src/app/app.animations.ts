import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'translateY(0)' })  // final
        )
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'translateY(-100%)' })  // final
        )
    ])
]);
export const item = trigger('slideUpDown', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'translateY(0)' })  // final
        )
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'translateY(-100%)' })  // final
        )
    ])
]);
