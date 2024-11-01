import { Link } from "react-router-dom"
import { Button } from "../Button"
import { IconAvatar, IconLogo } from "../Icons"
import { TransparentButton } from "../TransparentButton"
import { Container, StyledHeader, List, ListItem } from "./styles"
import { useAuthContext } from "../../app/hooks/useAuthContext"

export const Header = () => {

    const { logout } = useAuthContext()

    const onAskForLogout = () => {
        console.log('logout')
        logout()
    }

    return (<StyledHeader>
        <Container>
            <List>
                <ListItem>
                    <Link to="/">
                        <IconLogo />
                    </Link>
                </ListItem>
            </List>
            <List>
                <ListItem>
                    <Button link to="/auth/register">
                        Abrir conta
                    </Button>
                </ListItem>
                <ListItem>
                    <Button outline link to="/auth/login">
                        Login
                    </Button>
                </ListItem>
                <ListItem>
                    Joana da Silva Oliveira
                </ListItem>
                <ListItem>
                    <IconAvatar />
                </ListItem>
                <ListItem>
                    <TransparentButton onClick={onAskForLogout}>
                        Logout
                    </TransparentButton>
                </ListItem>
            </List>
        </Container>
    </StyledHeader>)
}