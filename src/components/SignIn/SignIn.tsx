import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { AiFillLock, AiFillUnlock } from 'react-icons/ai';
import { BiError } from 'react-icons/bi';
import { z } from 'zod';

import { Input } from 'components/Input/Input.tsx';
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
    const [showPassword, setShowPassword] = useState(false);

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

    if (loginSuccess) return <p>Login successful</p>;

    return (
        <form onSubmit={handleSubmit} className={styles.formContainer}>
            <h1 className={styles.title}>Welcome back</h1>
            <div className={styles.group}>
                <Input
                    type='text'
                    placeholder='Email'
                    value={formData.email}
                    onChange={handleSetLogin}
                    data-testid='email'
                />
                {errors.email && (
                    <span className={styles.errorMessage}>
                        <BiError />
                        {errors.email}
                    </span>
                )}
            </div>
            <div className={styles.group}>
                <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={formData.password}
                    onChange={handleSetPassword}
                    icon={
                        showPassword ? (
                            <AiFillLock data-testid='hidePassword' />
                        ) : (
                            <AiFillUnlock data-testid='showPassword' />
                        )
                    }
                    onIconClick={() => setShowPassword(!showPassword)}
                    data-testid='password'
                />
                {errors.password && (
                    <span className={styles.errorMessage}>
                        <BiError />
                        {errors.password}
                    </span>
                )}
            </div>
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
