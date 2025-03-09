import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    userName: 'josevigodev',
    name: 'Jose Vigo',
    isFollowing: true
  },
  {
    userName: 'midudev',
    name: 'Miguel Angel Duran',
    isFollowing: false
  },
  {
    userName: 'pheralb',
    name: 'Pedro Pica',
    isFollowing: false
  },
  {
    userName: 'emily',
    name: 'Emily Reyes',
    isFollowing: false
  }
];

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