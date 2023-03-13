import { CommandIcon, EditorTab, EditorWrapper, TextArea, TextAreaWrapper } from '../../styled/Editor'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Alert from '../alert/Alert'
import Frame from '../frame/Frame'
import { useState } from 'react'
import { executeCypher } from '../../features/cypher/CypherSlice'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { setError } from '../../features/database/DatabaseSlice'
import uuid from 'react-uuid'
import { ThreeRenderer } from '../three/ThreeRenderer'

export const Editor = () => {

  const dispatch = useDispatch()
  const [command, setCommand] = useState('')
  const { renderThree, inputData, currRef } = useSelector(state => state.render)

  const executeCommnad = () => {
    const query = {
      cmd: command,
    }
    dispatch(executeCypher(query)).then((response) => {
      if (response.type === 'database/exeucteCypher/fulfilled') {
        dispatch(setError({ error: "" }))
      } else if (response.type === 'database/exeucteCypher/rejected') {
        console.log('hio')
        dispatch(setError({ error: "Failed to execute cypher query. Please double check your query." }))
      }
    })
  }
  return (
    <>
    <EditorWrapper>
        <EditorTab>
            <TextAreaWrapper>
                <span>$</span>
                <TextArea value={command} onChange={(e) => setCommand(e.target.value)}/>
                <CommandIcon onClick={executeCommnad}>
                    <FontAwesomeIcon icon={faLocationArrow} />
                </CommandIcon>
            </TextAreaWrapper>
        </EditorTab>
    </EditorWrapper>
    <Alert />
    { !renderThree ? <Frame />: <ThreeRenderer inputData={inputData[currRef]} />}
    </>
  )
}
