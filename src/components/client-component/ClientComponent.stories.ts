import type { Meta, StoryObj } from '@storybook/react';

import { ClientComponent } from './ClientComponent';

const meta = {
    title: 'ClientComponent',
    component: ClientComponent,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {},
} satisfies Meta<typeof ClientComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Client Component',
    },
};
