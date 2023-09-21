import { Button } from 'components/Button';

import './styles/index.scss';
import { TbHandClick } from 'react-icons/tb';

export const App = () => {
    return (
        <div>
            <Button icon={<TbHandClick />}>Press me</Button>
        </div>
    );
};
