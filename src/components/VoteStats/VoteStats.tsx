import css from './VoteStats.module.css'

interface Votes {
    good: number,
    neutral: number,
    bad: number,

}

function VoteStats({ stats: { good, neutral, bad } }: Votes) {
    const totalVotes: number = good + neutral + bad;
    const positiveRate: number = totalVotes ? Math.round((good / totalVotes) * 100) : 0;


    return (
        <div className={css.container}>
            <p className={css.stat}>Good: <strong>{good}</strong></p>
            <p className={css.stat}>Neutral: <strong>{neutral}</strong></p>
            <p className={css.stat}>Bad: <strong>{bad}</strong></p>
            <p className={css.stat}>Total: <strong>{totalVotes}</strong></p>
            <p className={css.stat}>Positive: <strong>{positiveRate}%</strong></p>
        </div>
    )
}

export default VoteStats;