import React from 'react'
import { Radio, Row, Col, Input, message } from 'antd'
import { observer } from 'mobx-react'
import { getColor } from '../Helpers/computedColor'
import styles from './search.module.scss'

const Search = observer(({ props }) => {
  const { types, changeType, searchPokemon, pokemonExist } = props
  const onChangeRadio = event => changeType(event.target.value)
  const error = () => {
    message.error('Pokemon is not found', 2)
  }
  if (pokemonExist === false) {
    error()
  }
  return (
    <div>
      <Radio.Group
        style={{ width: '100%' }}
        onChange={onChangeRadio}
        defaultValue="any"
        buttonStyle="solid"
      >
        <div className={styles.tags}>Tags</div>
        <Row className={styles.row}>
          {types.map(type => {
            return (
              <Col className={styles.col} span={2} key={type}>
                <Radio.Button
                  style={{ color: getColor(type)}}
                  value={type}
                >
                  {type}
                </Radio.Button>
              </Col>
            )
          })}
        </Row>
      </Radio.Group>
      <Input.Search
        className={styles.search}
        placeholder="Full name of pokemon (e.g. bulbasaur, charmander)"
        enterButton="Search"
        size="large"
        onSearch={value => searchPokemon(value)}
      />
    </div>
  )
})

export default Search
