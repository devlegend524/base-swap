import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Header } from './styled';

function ExampleSection({ component, title }) {
    return (
        <Container>
            <Header>{title}</Header>
            <Content>{component}</Content>
        </Container>
    );
}

ExampleSection.propsTypes = {
    title: PropTypes.string,
    component: PropTypes.node,
};

export default ExampleSection;
