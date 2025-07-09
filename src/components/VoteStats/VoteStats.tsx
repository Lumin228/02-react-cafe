import css from './VoteStats.module.css'


interface Props {
    onStats: {
        good: number,
        neutral: number,
        bad: number,
    }
}

function VoteStats({ onStats }: Props) {
    const totalVotes: number = onStats.good + onStats.neutral + onStats.bad;
    const positiveRate: number = totalVotes ? Math.round((onStats.good / totalVotes) * 100) : 0;

    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{onStats.good}</strong></p>
            <p className={css.stat}>Neutral: <strong>{onStats.neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{onStats.bad}</strong></p>
            <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    );
}


export default VoteStats;