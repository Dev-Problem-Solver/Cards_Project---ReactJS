const Card = (props) => {
  return (
  

  
    <div className="card">
      <div className="top">
        <img src={props.img} alt="" />

        <div className="icons">
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-facebook"></i>
        </div>
      </div>

      <div className="center">
        <img src="../src/assets/logo.jpeg" alt="" />
      </div>

      <div className="bottom">
        <button className="btn">Follow</button>

        <div className="info">
          <h3 className="name">
          {props.name}
            <i
              className="fa-solid fa-circle-check logo"
              style={{ color: "rgb(116, 192, 252)", marginLeft: "6px" }}
            ></i>
          </h3>

          <p className="username">{props.username}</p>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit omnis repellendus magnam iusto fugiat alias doloremque minus dolore nobis soluta.
          </p>

          <div className="follow-info">
            <h4>
             {props.following} <span>Following</span>
            </h4>
            <h4>
              {props.followers} <span>Followers</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
      
  );
};

export default Card;