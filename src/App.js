import React from 'react'
import PokeBoard from './components/PokeBoard/PokeBoard'
import { observer } from 'mobx-react'
import Search from './components/Search/Search'
import ModalPoke from './components/ModalPoke/ModalPoke'

const App = observer(props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <Search props={props.store} />
      <PokeBoard props={props.store} />
      <ModalPoke props={props.store} />
    </div>
  )
})

export default App
