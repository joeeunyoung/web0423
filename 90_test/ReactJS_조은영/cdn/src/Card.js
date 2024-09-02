
function Card(props){
    return (
        <li className="card_list">
            <div className="card_img">
                <img src={props.mimg} alt={props.mtit}></img>
            </div>
            <div>
                <h3 className="card_tit">{props.mtit}</h3>
            </div>
            <div>
                <span className="card_date">판매 개시일: {props.mdate}</span>
            </div>
            <div className="card_btn">
                <button>{props.mheart}</button>
                <a href="#">구매</a>
            </div>            

        </li>
    );
}