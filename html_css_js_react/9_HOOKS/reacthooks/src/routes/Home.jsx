import HookUseState from '../components/HookUseState'
import HookUseReducer from '../components/HookUseReducer'

const Home = () => {
  // const {counter} = useContext(CounterContext)
  return (
    <>
      <h1>home</h1>
      <HookUseState />
      <HookUseReducer />
    </>

  )
}

export default Home
