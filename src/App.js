import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Form from './Form';
/** 
* JSX yazimi kullanilir
* JSX içerisinde direk olarak javascript kodlari yazabiliriz
* {} açmani ve içine java javascript kodu yazmamiz yeterlidir
* jsx de class yerine className kullanilir
* jsx de for yerine htmlFor kullanilir
* stil yazarken stili obje seklinde yazili {{}}
*/
function App() {

  let isim = "betul";

  const pstil = {
    color:'red',
    fontSize:'35px'
  };

  return (
    <div >
      <Header />
      <Form />
    </div>

    
    
  );

}

export default App;
