import type { Meta, StoryObj } from '@storybook/react';

import { ServerComponent } from './ServerComponent';

const meta = {
    title: 'ServerComponent',
    component: ServerComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ServerComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Server Component',
    },
};
