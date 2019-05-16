export const menuHandlerStyle = {
    position: 'absolute',
    top: '15%',
    left: '15%',
    minHeight: '500px',
    width: '70%',
    backgroundColor: 'rgba(180, 249, 255, 0.96)',
    border: '10px #53d5ff solid',
    borderRadius: '10px',
    padding: '15px',
    zIndex: '999999999999999999999999999999999999',
}

export const menuStyle = {
    height: '100%',
    width: '100%',
    fontSize: '2rem',
    display: 'flex',
    flexFlow: 'row wrap',
}
export const header = {
    height: '3rem',
    width: '100%',
    display: 'block',
    borderBottom: 'rgba(14, 232, 251, 1) solid 7px',
}
export const headerX = {
    height: '100%',
    fontSize: '2rem',
    display: 'inline-block',
    float: "right",
    cursor: 'pointer',
    marginRight: '10px',
}
export const headerTitle = {
    height: '100%',
    fontSize: '1.5rem',
    display: 'inline-block',
    float: "left",
    marginLeft: '10px',
}

export const menuItemContainer = {
    height: 'calc(100% - 4rem - 30px)',
    width: 'calc(100% - 30px)',
    fontSize: '1.5rem',
    display: 'flex',
    flexWrap: 'wrap',
    position: 'absolute',
    top: 'calc(15% + 1rem - 30px)',
}

export const menuOption = {
    display: "block",
    fontSize: "2rem",
    margin: "auto",
    top: "calc(50% - 1rem)",
    position: "relative",
    width: "fit-content",
}
export const menuOptionJavaScriptInjection = {
    display: "block",
    fontSize: "2rem",
    margin: "auto",
    top: "calc(50% - 1rem)",
    position: "relative",
    width: "fit-content",
}


export default {
    menuHandlerStyle,
    menuStyle,
    header,
    headerX,
    headerTitle,
    menuItemContainer,
    menuOption,
    menuOptionJavaScriptInjection,
}