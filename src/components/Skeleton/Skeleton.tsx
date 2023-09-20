import { CSSProperties } from 'react';
import styles from './Skeleton.module.scss';

import { classNames } from '../../lib/classNames.ts';

interface SkeletonProps {
    height?: string | number;
    width?: string | number;
    theme?: 'light' | 'dark';
    borderRadius?: string | number;
}

export const Skeleton = ({
    height = '100px',
    width = '100%',
    borderRadius = '5px',
    theme = 'light'
}: SkeletonProps) => {
    const style: CSSProperties = {
        width,
        height,
        borderRadius
    };
    return (
        <div
            className={classNames(styles.skeleton, {}, [styles[theme]])}
            style={style}
        />
    );
};
