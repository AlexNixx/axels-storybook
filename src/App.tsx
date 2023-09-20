import { Skeleton } from './components/Skeleton';

import './styles/index.scss';

export const App = () => {
    return (
        <div>
            <Skeleton width={300} height={300} borderRadius={180} />
        </div>
    );
};
