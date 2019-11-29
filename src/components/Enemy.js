import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import useBattle from '../hooks/useBattle';

export default function Enemy() {
    const { enemyHp } = useBattle();


    return (
        <Card>
            <Card.Body>
            <p>
                    {`${enemyHp}/10`}
                </p>
                <p>
                    Comma
                </p>
            </Card.Body>
        </Card>
    );
}
