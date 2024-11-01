import { Link } from "react-router-dom"
import { IconLogo } from "../Icons"
import { Container, StyledHeader, List, ListItem } from "./styles"
import { useAuthContext } from "../../app/hooks/useAuthContext"
import { AuthenticadedActionList } from "./AuthenticadedActionList"
import { UnauthenticadedActionList } from "./UnauthenticadedActionList"

export const Header = () => {
    const { session } = useAuthContext()
    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    <Link to="/">
                        <IconLogo />
                    </Link>
                </ListItem>
            </List>
            { session ? <AuthenticadedActionList /> : <UnauthenticadedActionList /> }
        </Container>
    </StyledHeader>)
}