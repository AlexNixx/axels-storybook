import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AiFillLock, AiFillUnlock, AiOutlineMail } from 'react-icons/ai';
import { z } from 'zod';

import { Input } from 'components/Input/Input';
import { Button } from 'components/Button';

import styles from './SignIn.module.scss';

const SignInSchema = z.object({
    email: z.string().email({ message: 'Invalid email' }),
    password: z.string().min(4, { message: 'At least 4 letter' })
});

export const SignIn = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();

        try {
            SignInSchema.parse(formData);
            setErrors({ email: '', password: '' });
            setLoginSuccess(true);
        } catch (error) {
            if (error instanceof z.ZodError) {
                const newErrors = { email: '', password: '' };
                error.errors.map(err => {
                    newErrors[err.path[0] as 'email' | 'password'] =
                        err.message;
                });
                setErrors(newErrors);
            }
        }
    };

    const handleSetLogin = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            email: event.target.value
        });
        setErrors({ ...errors, email: '' });
    };

    const handleSetPassword = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            password: event.target.value
        });
        setErrors({ ...errors, password: '' });
    };

    const passwordIcon = () =>
        isPasswordVisible ? (
            <AiFillLock
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                data-testid='hidePassword'
            />
        ) : (
            <AiFillUnlock
                onClick={() => setIsPasswordVisible(!isPasswordVisible)}
                data-testid='showPassword'
            />
        );

    if (loginSuccess) return <p>Login successful</p>;

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1 className={styles.title}>Welcome back</h1>
            <Input
                type='text'
                placeholder='Email'
                prefixIcon={<AiOutlineMail />}
                value={formData.email}
                onChange={handleSetLogin}
                errorMessage={errors.email}
                fullWidth
                data-testid='email'
            />
            <Input
                type={isPasswordVisible ? 'text' : 'password'}
                placeholder='Password'
                errorMessage={errors.password}
                fullWidth
                suffixIcon={passwordIcon()}
                value={formData.password}
                onChange={handleSetPassword}
                data-testid='password'
            />
            <Button
                type='submit'
                fullWidth
                theme='primary'
                data-testid='submitBtn'
            >
                Login
            </Button>
        </form>
    );
};
