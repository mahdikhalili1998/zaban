import Link from "next/link";
function Header(){
    return( 
    <header>
        <div>
            <ul>
                <li>خدمات</li>
                <li>کلاس ها</li>
                <li>فروشگاه</li>
                <li>اساتید</li>
               <li>
                <Link href="/">میتیلو</Link>
               </li>
            </ul>
        </div>

        <div>
            <input type="text" placeholder="جست وجو کنید..."></input>
            <span>📞</span>
            <span> 🛒 </span>
            <span> ورود</span>
            <span> ثبت نام</span>
            
        </div>
    </header>
    )
} 
export default Header;