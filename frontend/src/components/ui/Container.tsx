import type React from "react"
import cn from "../../lib/utils"


type ContainerProps = {

    children : React.ReactNode , 
    classname?:string
} ; 

const Container = ({children , classname} : ContainerProps) => {
    
  return (
    <div className={cn(
        "mx-auto max-w-4xl w-full px-4 sm:px-6 lg:px-8",
        classname
    )}>
        {children}
    </div>
  );
};

export default Container ;