import type { Meta, StoryObj } from '@storybook/react';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { SignIn } from './SignIn';

const meta: Meta<typeof SignIn> = {
    component: SignIn,
    title: 'Form/SignIn'
};

export default meta;

type Story = StoryObj<typeof meta>;

export const SubmitEmpty: Story = {
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        const submitBtn = canvas.getByTestId('submitBtn');

        await userEvent.click(submitBtn);

        await expect(canvas.getByText(/Invalid email/i)).toBeInTheDocument();
        await expect(
            canvas.getByText(/At least 4 letter/i)
        ).toBeInTheDocument();
    }
};

export const ShowPassword: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);
        const typedText = 'secret password';

        const password = canvas.getByTestId('password');

        await step('Verify that the password is hidden', async () => {
            expect(password).toHaveAttribute('type', 'password');
        });

        await step('Type text', async () => {
            await userEvent.type(password, typedText);
            await expect(password).toHaveValue(typedText);
        });

        await step('Verify that the password is displayed', async () => {
            await userEvent.click(canvas.getByTestId('showPassword'));
            expect(password).toHaveAttribute('type', 'text');
        });

        await step('Verify that the password is hidden', async () => {
            await userEvent.click(canvas.getByTestId('hidePassword'));
            expect(password).toHaveAttribute('type', 'password');
        });
    }
};

export const SubmitSuccess: Story = {
    play: async ({ canvasElement, step }) => {
        const canvas = within(canvasElement);

        const submitBtn = canvas.getByTestId('submitBtn');
        const email = canvas.getByTestId('email');
        const password = canvas.getByTestId('password');

        await step('Enter email and password', async () => {
            await userEvent.type(email, 'testemail@gmail.com');
            await userEvent.type(password, 'password');
        });

        await step('Submit form', async () => {
            await userEvent.click(submitBtn);
            await expect(
                canvas.getByText(/Login successful/i)
            ).toBeInTheDocument();
        });
    }
};
