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
export const disappear = trigger('disappear', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'scale(1)' })  // final
        )
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)' }),  // initial
        animate('.5s ease-in-out',
            style({ transform: 'scale(0)' })  // final
        )
    ])
]);
