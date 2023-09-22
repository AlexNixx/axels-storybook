import { FC, InputHTMLAttributes, ReactElement } from 'react';

import { BiError } from 'react-icons/bi';
import { classNames } from 'lib/classNames.ts';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    suffixIcon?: ReactElement<SVGElement>;
    prefixIcon?: ReactElement<SVGElement>;
    errorMessage?: string;
    fullWidth?: boolean;
    className?: string;
}

export const Input: FC<InputProps> = props => {
    const {
        suffixIcon,
        prefixIcon,
        errorMessage,
        fullWidth,
        className = '',
        ...otherProps
    } = props;

    return (
        <div
            className={classNames(
                styles.inputContainer,
                { [styles.fullWidth]: fullWidth },
                []
            )}
        >
            {prefixIcon && <i className={styles.prefix}>{prefixIcon}</i>}
            <input
                {...otherProps}
                className={classNames(
                    styles.input,
                    {
                        [styles.error]: errorMessage
                    },
                    [className]
                )}
            />
            {suffixIcon && <i className={styles.suffix}>{suffixIcon}</i>}
            {errorMessage && (
                <span className={styles.errorMessage}>
                    <BiError /> {errorMessage}
                </span>
            )}
        </div>
    );
};
