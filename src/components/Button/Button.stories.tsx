import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';
import { TbHandClick } from 'react-icons/tb';

const meta: Meta<typeof Button> = {
    component: Button,
    title: 'Components/Button',
    tags: ['autodocs'],
    args: {
        theme: 'outline',
        size: 'medium',
        loading: false,
        disabled: false,
        fullWidth: false,
        reverse: false,
        type: 'button'
    },
    argTypes: {
        icon: {
            control: {
                type: 'none'
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Press me'
    }
};

export const Primary: Story = {
    args: {
        children: 'Press me',
        theme: 'primary'
    }
};

export const Link: Story = {
    args: {
        children: 'Press me',
        theme: 'link'
    }
};

export const Size: Story = {
    render: args => (
        <div
            style={{
                display: 'flex',
                gap: '15px'
            }}
        >
            <Button {...args} size='small'>
                Press me
            </Button>
            <Button {...args} size='medium'>
                Press me
            </Button>
            <Button {...args} size='large'>
                Press me
            </Button>
        </div>
    )
};

export const Loading: Story = {
    args: {
        children: 'Press me',
        loading: true
    }
};

export const Disabled: Story = {
    args: {
        children: 'Press me',
        disabled: true
    }
};

export const WithIcon: Story = {
    args: {
        children: 'With Icon',
        icon: <TbHandClick />
    }
};
