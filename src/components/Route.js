import useNav from "../hooks/use-nav";

function Route({path, children}){
    //destructring or fetching currentPath from context system
    const {currentPath} = useNav()
    
    if (path===currentPath){
        return children
    }
    else{
        return null;
    }
}

export default Route