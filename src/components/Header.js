import { AppBar, makeStyles, Toolbar } from '@material-ui/core'
import { useState } from 'react'

export const Header = () => {
    const[mobile, setMobile] = useState(false)
    const classes = useStyle()
    const displayMobile = () => {}
    const displayDesktop = () => {
        <Toolbar className={classes.toolbar}>
            
        </Toolbar>
    }
    return (
        <AppBar>
            {
            mobile ? displayMobile() : displayDesktop()
            }
        </AppBar>
    )
}

const useStyle = makeStyles((theme) => ({
    toolbar: {}
}))

export default Header
