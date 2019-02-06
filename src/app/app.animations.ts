import {
    trigger,
    style,
    animate,
    transition
} from '@angular/animations';

export const slideUpDown = trigger('slideUpDown', [
    transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('.5s ease-in-out',
            style({ transform: 'translateY(0)' })
        )
    ]),
    transition(':leave', [
        style({ transform: 'translateY(0)' }),
        animate('.5s ease-in-out',
            style({ transform: 'translateY(-100%)' })
        )
    ])
]);
export const disappear = trigger('disappear', [
    transition(':enter', [
        style({ transform: 'scale(0)' }),
        animate('.5s ease-in-out',
            style({ transform: 'scale(1)' })
        )
    ]),
    transition(':leave', [
        style({ transform: 'scale(1)' }),
        animate('.5s ease-in-out',
            style({ transform: 'scale(0)' })
        )
    ])
]);
