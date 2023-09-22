import './styles/index.scss';
import { SignIn } from 'components/SignIn/SignIn.tsx';

export const App = () => {
    const appStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
        height: '100vh'
    };

    return (
        <div style={appStyle}>
            <SignIn />
        </div>
    );
};
