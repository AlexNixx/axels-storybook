import { ButtonHTMLAttributes, FC, ReactElement } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

import { classNames } from 'lib/classNames.ts';

import styles from './Button.module.scss';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: 'outline' | 'primary' | 'link';
    size?: 'small' | 'medium' | 'large';
    loading?: boolean;
    disabled?: boolean;
    fullWidth?: boolean;
    type?: 'button' | 'submit';
    icon?: ReactElement<SVGElement>;
    reverse?: boolean;
    className?: string;
}

export const Button: FC<ButtonProps> = props => {
    const {
        theme = 'outline',
        size = 'medium',
        loading,
        disabled,
        fullWidth = false,
        type = 'button',
        className = '',
        icon,
        reverse = false,
        children,
        ...otherProps
    } = props;

    const isButtonDisabled = loading || disabled;
    const isShowIconFirst = !loading && icon && !reverse;
    const isShowIconReverse = !loading && icon && reverse;

    return (
        <button
            type={type}
            disabled={isButtonDisabled}
            className={classNames(
                styles.button,
                {
                    [styles.loading]: loading,
                    [styles.disabled]: isButtonDisabled,
                    [styles.fullWidth]: fullWidth
                },
                [className, styles[theme], styles[size]]
            )}
            {...otherProps}
        >
            {isShowIconFirst && icon}
            {loading && <AiOutlineLoading className={styles.loader} />}
            {children}
            {isShowIconReverse && icon}
        </button>
    );
};
