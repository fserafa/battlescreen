import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import useBattle from '../hooks/useBattle';

export default function Character() {
    const { charHp } = useBattle();

    return (
        <Card>
            <Card.Body>
                <p>
                    {`${charHp}/10`}
                </p>
                <p>
                    Dot
                </p>
            </Card.Body>
        </Card>
    );
}

