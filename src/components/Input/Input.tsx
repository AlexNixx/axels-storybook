import { FC, InputHTMLAttributes, ReactElement } from 'react';

import styles from './Input.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    icon?: ReactElement<SVGElement>;
    onIconClick?: () => void;
}

export const Input: FC<InputProps> = ({ icon, onIconClick, ...otherProps }) => (
    <div className={styles.inputContainer}>
        <input {...otherProps} className={styles.input} />
        {icon && (
            <i className={styles.icon} onClick={onIconClick}>
                {icon}
            </i>
        )}
    </div>
);
