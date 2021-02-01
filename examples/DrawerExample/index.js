import { useState } from 'react';
import { Drawer, Button } from 'react-rainbow-components';

export default function DrawerExample() {
    const [isOpen, setIsOpen] = useState(false);
    const [slideFrom, setSlideFrom] = useState('left');

    return (
        <div className="rainbow-m-vertical_large rainbow-p-horizontal_small rainbow-m_auto rainbow-flex_wrap">
            <div className="rainbow-flex rainbow-flex_row">
                <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
                    <Button
                        className="rainbow-m-around_medium"
                        label="Slide from left"
                        onClick={() => {
                            setSlideFrom('left');
                            setIsOpen(true);
                        }}
                    />
                </div>
                <div className="rainbow-align-content_center rainbow-p-medium rainbow-m_auto">
                    <Button
                        className="rainbow-m-around_medium"
                        label="Slide from right"
                        onClick={() => {
                            setSlideFrom('right');
                            setIsOpen(true);
                        }}
                    />
                </div>
            </div>
            <Drawer
                header="This is a drawer"
                slideFrom={slideFrom}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            />
        </div>
    );
}
