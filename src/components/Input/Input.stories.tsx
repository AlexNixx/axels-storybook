import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';

import { Input } from './Input';
import { ChangeEvent } from 'react';
import { AiOutlineMail } from 'react-icons/ai';

const meta: Meta<typeof Input> = {
    component: Input,
    title: 'Components/Input',
    tags: ['autodocs']
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        value: 'Input text'
    }
};

export const Controlled: Story = {
    render: function Component(args) {
        const [, setArgs] = useArgs();

        const onChange = (event: ChangeEvent<HTMLInputElement>) => {
            setArgs({ value: event.target.value });
        };

        return <Input {...args} onChange={onChange} />;
    }
};

export const FullWidth: Story = {
    args: {
        value: 'I`m full-width input',
        fullWidth: true
    }
};

export const Error: Story = {
    args: {
        value: 'Invalid text',
        errorMessage: 'Please type valid value'
    }
};

export const PrefixIcon: Story = {
    args: {
        value: 'Email',
        prefixIcon: <AiOutlineMail />
    }
};

export const SuffixIcon: Story = {
    args: {
        value: 'Email',
        suffixIcon: <AiOutlineMail />
    }
};

export const Number: Story = {
    args: {
        value: 1,
        type: 'number',
        min: 0,
        max: 100,
        step: 10
    }
};
