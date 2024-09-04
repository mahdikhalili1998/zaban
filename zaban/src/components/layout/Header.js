import Link from "next/link";
function Header(){
    return( 
    <header>
        <div class="container mx-auto flex justify-between items-center px-5">
            <ul class="flex space-x-4">
                <li class="w-10 h-6">  خدمات  </li>
                <li>   </li>
                <li class="w-10 h-6">  کلاسها  </li>
                <li class="w-10 h-6">  فروشگاه  </li>
                <li>   </li>
                <li class="w-10 h-6">  اساتید  </li>
               <li class="w-10 h-6">
                <Link href="/">میتیلو</Link>
               </li>
            </ul>
        </div>

        <div class="text-left">
            <input class="h-10 w-60 justify-center rounded-3xl p-3 px-11" type="text" placeholder="جست وجو کنید..."></input>
            <span class="w-5 h-5">📞</span>
            <span class="w-5 h-5"> 🛒 </span>
            <span class="w-5 h-5"> ورود | </span>
            <span class="w-5 h-5"> ثبت نام</span>
            
        </div>
    </header>
    )
} 
export default Header;