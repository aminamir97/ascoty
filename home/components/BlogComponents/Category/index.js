import React from "react";
import classes from "./style/category.module.css";
import Link from "next/link";

 
 export default function Category() {
   return (
     <div> <div>
     <div>
       <ul className={classes.ul}>
         <p className={classes.category}>Category</p>
         <li className={classes.li}>
           <Link href="/commerce">
             <a className={classes.a}>E-Commerce (45)</a>
           </Link>
         </li>
         <li className={classes.li}>
           <Link href="#">
             <a className={classes.a}>Data Science (15)</a>
           </Link>
         </li>
         <li className={classes.li}>
           <Link href="#">
             <a className={classes.a}>Culture (32)</a>
           </Link>
         </li>
         <li className={classes.li}>
           <Link href="#">
             <a className={classes.a}>Business (08)</a>
           </Link>
         </li>
       </ul>
     </div>
   </div></div>
   )
 }
 
