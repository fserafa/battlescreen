import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import HUD from '../components/HUD';
import BattleContainer from '../components/BattleContainer';
import { BattleContextProvider } from '../BattleContext';

export default function Index() {
    const [charHp, setCharHp] = useState(10);
    const [enemyHp, setEnemyHp] = useState(10);

    return (
        <BattleContextProvider>
            <Container className="d-flex">
                <div style={{ width: '100%', height: 600, backgroundColor: '#f1f1f1' }}>
                    <BattleContainer />
                    <HUD />
                </div>
            </Container>
        </BattleContextProvider>
    )
} 