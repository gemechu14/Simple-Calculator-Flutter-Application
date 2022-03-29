import './sidebar.css';


export default function Sidebar() {
    return (
        <>
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">
                    About   </span>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.JnH7BJ_pl4A3_3BQhekyUAHaEI&pid=Api&P=0&w=341&h=191" alt="" />
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati ducimus molestias nihil, aperiam sequi facere sed esse quia corrupti nobis similique possimus. Ullam est perferendis vero, nulla repellendus voluptas eligendi!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum iure deleniti dolores maiores. Quia, autem quas! Ipsum aliquam quasi explicabo nisi, harum ullam beatae iure? Harum quasi illo totam repudiandae.</p>
             

            </div>
           

        <div className="sideBarItem">
    <span className="sideBarTitle">Follow us</span>
      <div className="sideBarSocial">

     <i className="sideBarIcon fab fa-facebook-square"></i>

     <i className="sideBarIcon fab fa-twitter-square"></i>
     
     <i className="sideBarIcon fab fa-pInterest-square"></i>
     <i className=" searchImage fas fa-search"></i>
     

      </div>


        </div>
        </div>
        
        
        </>
    )
}
