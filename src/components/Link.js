import classNames from "classnames" //for tailwind
import useNav from "../hooks/use-nav" //custom hook to write less code for context system

function Link({to, children, classname, activeClass}){

    const {navigate, currentPath} = useNav()

    //tailwind
    const classes = classNames('text-blue-500', classname,
    currentPath===to && activeClass //highlighting active directory
    )

    const handleClick = (event)=>{
        //when user keeps clicked the ctrl or command new tab will be opened with that link
        if(event.metaKey || event.ctrlKey){
            return
        }
        event.preventDefault()
        navigate(to)
    }
    return <a className={classes} href={to} onClick={handleClick}>{children}</a>
}

export default Link