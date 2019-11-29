import React, { Component, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import useBattle from '../hooks/useBattle';

export default function HUD() {
    const { attack, charHp, enemyHp, attackPlayer } = useBattle();

    useEffect(() => {
        setTimeout(() => {
            attackPlayer();
        }, 1000)
    }, [charHp]);

    return (
        <Card>
            <Card.Body>
                <Button onClick={() => attack()}>atk</Button>
            </Card.Body>
        </Card>
    );
}
