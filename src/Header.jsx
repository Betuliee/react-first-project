/**
 * Component Yazilim Kurali
 * Her react componenti bir javascript fonskiyonudur
 * Bas harfi buyuk harfle baslar
 * içerisinde mutlaka bir jsx return eder
 * daha sonra istenilen yerlerden kullanilmak uzere export edili
 * 
 */

import Button from "./Button";
import Button2 from "./Button2";

const Header = () => {
    return (
        <header>
            <h1>Fcoder</h1>
            <nav>
                <a href="">Ana Sayfa</a>
                <a href="">Urunler</a>
                <a href="">Hakkimizda</a>
                <a href="">Iletisim</a>
            </nav>

            <div>
               {/* <Button butonMetni ={'Kullanici Girisi'}/>
               <Button butonMetni = {"Yonetici Girisi"}/>
               <Button butonMetni = {"Kayit Ol"}/> */}
               <Button2 buttonTitle={'Kullanici Girisi'}/>
               <Button2 buttonTitle={'Yotenici Girisi'} buttonColor={'orangered'}/>

            </div>
        </header>
    );
};

export default Header;