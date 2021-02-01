import { useState } from 'react';
import styled from 'styled-components';
import {
    VerticalNavigation,
    VerticalItem,
    VerticalSectionOverflow,
} from 'react-rainbow-components';

const StyledContainer = styled.div`
    width: 220px;
    background: white;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
    border-right: 1px solid #e2e2e2;
    padding: 2rem 0;
`;
export default function VerticalNavigationExample() {
    const [selectedItem, setSelectedItem] = useState('item 1');
    return (
        <StyledContainer>
            <VerticalNavigation
                selectedItem={selectedItem}
                onSelect={(_, item) => setSelectedItem(item)}
            >
                <VerticalSectionOverflow label="Folders" description="Folders created, shared...">
                    <VerticalItem name="item-3" label="Apps" />
                    <VerticalItem name="item-4" label="Folder shared with Me" />
                </VerticalSectionOverflow>
                <VerticalSectionOverflow label="Recents" description="Folders created, shared...">
                    <VerticalItem name="item-1" label="Shared with Me" />
                    <VerticalItem name="item-2" label="Created by Me" />
                </VerticalSectionOverflow>
                <VerticalSectionOverflow
                    label="Documents"
                    description="Document created, shared..."
                >
                    <VerticalItem name="item-5" label="Recents" />
                    <VerticalItem name="item-6" label="Folder created by Me" />
                    <VerticalItem name="item-7" label="Folder shared with Me" />
                </VerticalSectionOverflow>
            </VerticalNavigation>
        </StyledContainer>
    );
}
