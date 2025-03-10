import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { users } from './users'

export function App() {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
            <TwitterFollowCard
              key={userName}
              userName={userName}
              initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        )
      }
    </section>
  )
}