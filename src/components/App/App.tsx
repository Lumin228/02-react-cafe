import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteStats from '../VoteStats/VoteStats'
import VoteOptions from '../VoteOptions/VoteOptions'
import Notification from '../Notification/Notification'
import type {Votes} from '../../types/votes'


function App() {
  const [votes, setVote] = useState<Votes>({ good: 0, neutral: 0, bad: 0 })

  const addVote = (key: keyof Votes): void => {
    setVote({
      ...votes,
      [key]: votes[key] + 1
    })
  }
  const posible: boolean = votes.good > 0 || votes.bad > 0 || votes.neutral > 0;

  const totalVotes: number = votes.good + votes.neutral + votes.bad;
  const positiveRate: number = totalVotes ? Math.round((votes.good / totalVotes) * 100) : 0;

  const reset = (): void => {
    setVote({ good: 0, neutral: 0, bad: 0 })
  }

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions onVote={addVote} onReset={reset} canReset={posible} />
        {posible ? <VoteStats votes={votes} totalVotes={totalVotes} positiveRate={positiveRate} /> : <Notification />}
      </div>
    </>
  )
}

export default App
