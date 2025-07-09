import clsx from 'clsx';
import css from './VoteOptions.module.css'
import type { VoteType } from '../../types/types';


interface Types{
    onVote: (key: VoteType) => void;
    onReset: () => void;
    canReset: boolean;
}

function VoteOptions({onVote, onReset, canReset}: Types) {

    return (
        <div className={css.container}>
            <button className={css.button} onClick={() => onVote('good')}>Good</button>
            <button className={css.button} onClick={() => onVote('neutral')}>Neutral</button>
            <button className={css.button} onClick={() => onVote('bad')}>Bad</button>
            <button className={clsx(!canReset && css.isHidden,`${css.button} ${css.reset}`)} onClick={onReset}>Reset</button>
        </div>
    )
}

export default VoteOptions