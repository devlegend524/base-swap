import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
`;

export const Header = styled.div`
    font-weight: 600;
    font-size: 1rem;
    margin: 0.5rem 1rem;
    ${'' /* background: ${props => props.theme.rainbow.palette.text.label}; */}
`;

export const Content = styled.div`
    box-sizing: border-box;
    border-radius: 1rem;
    background: #efefef;
    border: 1px solid #e2e2e2;
    mask-clip: border-box;
    ${'' /* background: ${props => props.theme.rainbow.palette.backgroud.highlight}; */}
`;