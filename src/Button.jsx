const Button = ({butonMetni}) => {

    const btnStyle = { backgroundColor:
        butonMetni === "Kullanici Girisi" 
        ? 'greenyellow' 
        : butonMetni === "Yonetici Girisi" 
        ? 'orangered'
        : 'yellow'};

    return(
        <div className="user-login" style={btnStyle}>
            {butonMetni}
        </div>
        
    );
};

export default Button;