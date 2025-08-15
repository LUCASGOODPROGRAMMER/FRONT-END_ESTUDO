import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'
import HookUseEffect from '../components/HookUseEffect'
import HookUseRef from '../components/HookUseRef'
import HookUseCallback from '../components/HookUseCallback'
import HookUseMemo from '../components/HookUseMemo'

import { useContext } from 'react'
import { SomeContext } from '../components/HookUseContext'


const Home = () => {
  const { contextValue } = useContext(SomeContext)
  // const {counter} = useContext(CounterContext)
  return (
    <>
      <h1>home</h1>
      <HookUseState />
      <HookUseReducer />
      <HookUseEffect />
      <h2>useContext: {contextValue}</h2>
      <hr />
      <HookUseRef />
      <HookUseCallback />
      <HookUseMemo />
    </>

  )
}

export default Home
