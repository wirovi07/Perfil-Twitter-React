/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { TwitterFollowCard } from '/src/TwitterFollowCard'
import './App.css'
// eslint-disable-next-line no-unused-vars
import { useState } from 'react'

const users = [
    {
        userName: 'wirovi',
        name: 'Wilmar Andres Rojas',
        isFollowing: true        
    },
    {
        userName: 'xialropin',
        name:'Xiomara Alejandra Rojas',
        isFollowing: false
    },
    {
        userName: 'salo242021',
        name: 'Salomon Rojas Rojas',
        isFollowing: true
    },
    {
        userName: 'aleja232024',
        name: 'Alejandra Rojas Rojas',
        isFollowing: false
    }
]

export function App () {
    // eslint-disable-next-line no-unused-vars
    return (
        <section className='App'>
            {
                users.map(({userName, name, isFollowing}) => (
                    <TwitterFollowCard
                        key={userName}
                        userName={userName}
                        initialIsFollowing={isFollowing}>
                        {name}
                    </TwitterFollowCard>
                ))
            }
        </section>
    )
}