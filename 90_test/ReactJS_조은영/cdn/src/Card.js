
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
                <span className="card_date">{props.mdate}</span>
            </div>

        </li>
    );
}