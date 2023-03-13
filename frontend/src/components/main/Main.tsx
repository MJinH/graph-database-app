import { EditorContainer } from "../../styled/Editor"
import MainContainer from "../../styled/Main"
import { SidebarContainer } from "../../styled/Sidebar"
import { Editor } from "../editor/Editor"
import DatabaseSidebar from "../sidebar/DatabaseSidebar"
import { Sidebar } from "../sidebar/Sidebar"
import { useState, useEffect } from "react"

export const Main = () => {

  const [databaseSide, setDatabaseSide] = useState(false)

  useEffect(() => {
    const databaseDiv = document.getElementById('databaseSide')
    const databaseWrapDiv = document.getElementById('databaseWrapper')
    if (!databaseSide && databaseWrapDiv) {
        if (databaseDiv)  {
            databaseDiv.style.width = '0%'
            databaseWrapDiv.style.display = 'none'
        }
    } 
    if (databaseSide && databaseWrapDiv) {
        if (databaseDiv) {
            databaseDiv.style.width = '20%'
            setTimeout(() => {
              databaseWrapDiv.style.display = 'block'
            }, 280)
        }
    }
  }, [databaseSide])

  return (
    <MainContainer>
        <SidebarContainer>
            <Sidebar databaseSide={databaseSide} setDatabaseSide={setDatabaseSide}/>
        </SidebarContainer>
        <DatabaseSidebar />
        <EditorContainer>
            <Editor />
        </EditorContainer>
    </MainContainer>
  )
}
