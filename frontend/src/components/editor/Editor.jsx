import { CommandIcon, EditorTab, EditorWrapper, TextArea, TextAreaWrapper } from '../../styled/Editor'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Alert from '../alert/Alert'
import Frame from '../frame/Frame'
import { useState } from 'react'
import { executeCypher } from '../../features/cypher/CypherSlice'
import { useDispatch } from 'react-redux'
import { setStatus } from '../../features/cypher/CypherSlice'
import uuid from 'react-uuid'

export const Editor = () => {

  const dispatch = useDispatch()
  const [command, setCommand] = useState('')
  
  const executeCommnad = () => {
    const query = {
      cmd: command,
    }
    dispatch(executeCypher(query)).then((response) => {
      if (response.type === 'database/exeucteCypher/fulfilled') {
        dispatch(setStatus({ refKey: uuid() }))
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
    <Frame />
    </>
  )
}
