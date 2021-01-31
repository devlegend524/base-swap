import { useState } from 'react';
import {
    Drawer,
    FileSelector,
    Lookup,
    ProgressIndicator,
    ProgressStep,
    Button,
    VerticalNavigation,
    VerticalSectionOverflow,
    VerticalItem,
} from 'react-rainbow-components';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="rainbow-p-horizontal_xx-large">
                <FileSelector
                    className="rainbow-m-vertical_x-large"
                    multiple
                    label="File selector multiple"
                    placeholder="Drag & Drop or Click to Browse"
                    bottomHelpText="Can select multiple files"
                />
                <br />
                <Lookup
                    className="rainbow-m-vertical_x-large"
                    label="lookup label"
                    placeholder="Search..."
                />
                <br />
                <ProgressIndicator currentStepName="step-3" className="rainbow-m-vertical_x-large">
                    <ProgressStep name="step-1" />
                    <ProgressStep name="step-2" />
                    <ProgressStep name="step-3" />
                    <ProgressStep name="step-4" />
                    <ProgressStep name="step-5" />
                </ProgressIndicator>
                <br />
                <Button label="Open Drawer" onClick={() => setIsOpen(true)} />
                <br />
            </div>
            <Drawer isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <div className="rainbow-p-top_large" style={{ margin: '2rem -1rem 1rem' }}>
                    <VerticalNavigation id="vertical-navigation-11" selectedItem="item-1">
                        <VerticalSectionOverflow
                            label="Recent Activity"
                            description="Folders created, shared..."
                        >
                            <VerticalItem name="item-1" label="Shared with Me" />
                            <VerticalItem name="item-2" label="Created by Me" />
                        </VerticalSectionOverflow>
                    </VerticalNavigation>
                </div>
            </Drawer>
        </>
    );
};

export default Home;
