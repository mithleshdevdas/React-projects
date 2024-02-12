import React  from 'react'
import Cards from './card-project/Cards'
import ContextSetup from './contexxt/ContextSetup'
import Counter from './counter-project/Counter'












function App() {
  return (
 
    <>
      <Cards name={ 'mk' } btn={ 'f' } />
      <ContextSetup />
      <Counter/>
</>
  )
}

export default App