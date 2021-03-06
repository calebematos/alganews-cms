
import { useEffect, useState } from "react"
import styled from "styled-components"
import { User } from "../../sdk/@types"
import UserService from "../../sdk/service/User.service"
import getEditorDescription from "../../sdk/utils/getEditorDescription"
import Profile from "../components/Profile"


export default function EditorsList() {
  
  const [editors, setEditors] = useState<User.EditorSummary[]>([])

  useEffect(() => {
    UserService
      .getAllEditors()
      // .then(editors => setEditors(editors)) // this line do the same thing of line bellow
      .then(setEditors)
  },[])
 
  return <EditorsListWrapper>
    {
      editors.map( editor => {
        return <Profile 
          editorId={editor.id} 
          name={editor.name}
          description={getEditorDescription(new Date(editor.createdAt))}
          avatarUrl={editor.avatarUrls.small}
        />
      })
    }
  </EditorsListWrapper>
}

const EditorsListWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  gap: 24px;
`