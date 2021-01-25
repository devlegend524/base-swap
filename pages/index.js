import { FileSelector, Lookup, ProgressIndicator, ProgressStep, Button } from 'react-rainbow-components';

const Home = () => {
    return (
        <>
            <FileSelector
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium rainbow-m_auto"
                multiple
                label="File selector multiple"
                placeholder="Drag & Drop or Click to Browse"
                bottomHelpText="Can select multiple files"
            />
            <br/>
            <Lookup label="lookup label" placeholder="Search..." />
            <br/>
            <ProgressIndicator currentStepName="step-3">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
                <ProgressStep name="step-4" />
                <ProgressStep name="step-5" />
            </ProgressIndicator>
            <br/>
            <Button label="button" />
        </>
    );
};

export default Home;
