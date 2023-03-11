import { CommandIcon, EditorTab, EditorWrapper, TextArea, TextAreaWrapper } from '../../styled/Editor'
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Alert from '../alert/Alert'
import Frame from '../frame/Frame'

export const Editor = () => {
  return (
    <>
    <EditorWrapper>
        <EditorTab>
            <TextAreaWrapper>
                <span>$</span>
                <TextArea />
                <CommandIcon>
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
