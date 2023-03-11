import { SidebarElements, SidebarWrapper } from "../../styled/Sidebar"
import { faDatabase, faGear, faCircleQuestion } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

type SidebarProps = {
  setDatabaseSide: (state: boolean) => void,
  databaseSide: boolean,
}

export const Sidebar = ({
  setDatabaseSide,
  databaseSide,
}: SidebarProps):JSX.Element => {

  const sidebarStatus = () => {
    setDatabaseSide(!databaseSide)
  }

  return (
    <SidebarWrapper>
        <SidebarElements onClick={sidebarStatus}>
            <FontAwesomeIcon icon={faDatabase} />
        </SidebarElements>
        <SidebarElements>
            <FontAwesomeIcon icon={faGear} />
        </SidebarElements>
        <SidebarElements>
            <FontAwesomeIcon icon={faCircleQuestion} />
        </SidebarElements>
    </SidebarWrapper>
  )
}
