import { Application } from 'react-rainbow-components';

const App = ({ Component, pageProps }) => {
    return (
        <Application>
            <Component {...pageProps} />
        </Application>
    );
};

export default App;
