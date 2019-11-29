import { useContext } from 'react';
import { BattleContext } from "../BattleContext";

const useBattle = () => {
    const [state, setState] = useContext(BattleContext);

    function attack() {
        if (state.enemyHp > 0) {
            setState(state => ({ ...state, enemyHp: state.enemyHp - 1 }));
        }
    }

    function attackPlayer() {
        if (state.enemyHp > 0) {
            setState(state => ({ ...state, charHp: state.charHp - 1 }));
        }
    }

    return {
        attack,
        attackPlayer,
        charHp: state.charHp,
        enemyHp: state.enemyHp,
    }
};

export default useBattle;