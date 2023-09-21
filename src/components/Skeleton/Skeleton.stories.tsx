import type { Meta, StoryObj } from '@storybook/react';

import { Skeleton } from './Skeleton';

const meta: Meta<typeof Skeleton> = {
    component: Skeleton,
    title: 'Skeleton',
    tags: ['autodocs'],
    argTypes: {
        theme: {
            description: 'skeleton theme'
        },
        height: {
            description: 'skeleton height',
            control: { type: 'text' }
        },
        width: {
            description: 'skeleton width',
            control: { type: 'text' }
        },
        borderRadius: {
            description: 'skeleton border radius',
            control: { type: 'text' }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Card: Story = {
    args: {
        height: '150px',
        width: '300px',
        borderRadius: '5px',
        theme: 'light'
    }
};

export const Circle: Story = {
    args: {
        height: '150px',
        width: '150px',
        borderRadius: '180px',
        theme: 'light'
    }
};

export const Twit: Story = {
    render: args => (
        <div
            style={{
                display: 'flex',
                gap: '15px'
            }}
        >
            <Skeleton
                height='50px'
                width='50px'
                borderRadius='180px'
                theme={args.theme}
            />
            <Skeleton
                height={args.height || '100px'}
                width={args.width || '300px'}
                borderRadius={args.borderRadius}
                theme={args.theme}
            />
        </div>
    )
};
