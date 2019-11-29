import React, { useState } from 'react';

const BattleContext = React.createContext([{}, () => { }]);

const BattleContextProvider = (props) => {
    const [state, setState] = useState({
        charHp: 10,
        enemyHp: 10
    });
    
    return (
        <BattleContext.Provider value={[state, setState]}>
            {props.children}
        </BattleContext.Provider>
    );
};

export { BattleContext, BattleContextProvider };