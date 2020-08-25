import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';

import * as markdown from './notes/component-a.notes.md';

import { ComponentAComponent } from '../../src/app/component-a/component-a.component';

storiesOf('Component A', module)
    .add('Francisco', () => ({
        component: ComponentAComponent,
        props: {
            name: 'Francisco',
            myEvent: action('Hello Francisco')
        },
    }), { notes: { markdown }})
    .add('Edel', () => ({
        component: ComponentAComponent,
        props: { name: 'Edel', myEvent: action('Hello Edel') }
    }))
    .add('DJ', () => ({
        component: ComponentAComponent,
        props: { name: 'DJ', myEvent: action('Hello DJ') },
    }));
