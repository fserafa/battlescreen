import React, { Component } from 'react';
import Character from './Character';
import Enemy from './Enemy';
import { Container } from 'react-bootstrap';

export default function BattleContainer() {

    return (
        <Container className="d-flex flex-row justify-content-around">
            <Character />
            <Enemy />
        </Container>
    );
} 
