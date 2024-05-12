import "../Header/header.css";

function Header(){
    return(
        <div className="Header">

           <div className="container">
           <img src="./images/logo/logo.svg" width={92} alt="Logo" />
            <h1>Доставка роллов</h1>
            <h2>Оперативно и вкусно</h2>
           </div>
        </div>
    )
}

export default Header