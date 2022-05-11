import Link from "next/link";


import style from "./style.module.css";


function CustomBtnComponent({txt,txtColor , link="#" })
{
  
   
        return (
            //cutted circle image
            //text with no any margin
       
         <Link href={link}>
            <div className={style.container}>
                <img className={style.circle}/>
                <p style={{color: txtColor}}>{txt}</p>
                <br/>
    
            </div>  
            
        </Link>
        );

    
   

 


}
export default CustomBtnComponent;