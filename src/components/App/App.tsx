import { useState } from 'react'
import css from './App.module.css'
import CafeInfo from '../CafeInfo/CafeInfo'
import VoteStats from '../VoteStats/VoteStats'
import VoteOptions from '../VoteOptions/VoteOptions'
import Notification from '../Notification/Notification'

interface Values{
  good: number,
  neutral: number,
  bad: number,
}

function App() {
  const [votes, setVote] = useState<Values>({good: 0, neutral: 0, bad: 0})

  return (
    <>
      <div className={css.app}>
        <CafeInfo />
        <VoteOptions />
        <VoteStats />
        <Notification />
      </div>
    </>
  )
}

export default App
