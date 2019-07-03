import React from 'react'; 
import Liste from './liste-description'
let tab5 = [
    {
        name: "Poland" 
    },
    {
        name: "Turkey" 
    },
    {
        name: "Spain" 
    },
    {
        name: "Italy" 
    },
    {
        name: "Czech Republic" 
    },
    {
        name: "Mexico" 
    },
    {
        name: "Colombia"
    }
    ,
    {
        name: "Brazil"
    }
    ,
    {
        name: "Chile"
    } 
]

function Itemcountries(props) {

    return (  
        <a href="#">{props.item.name}</a> 
    );
}


function Listecountries() {
    return ( 
        <div>
            <hr />
        <footer>
            
            <h6>We are leaders in 10 countries:  {tab5.map((el, index) => <Itemcountries item={el} key={index} />) }
                <br/>This site uses cookies to deliver services in accordance with this Privacy Policy. You can specify the conditions for storing or accessing cookies on your browser.
                <br/>www.docplanner.com © 2019
            </h6>
        </footer>
        </div>
    );
} 
//--------------------------------------------------------------------------------------------------------------
let tab4 = [
    {
        name: "WARSAW1",
        img: "https://www.docplanner.com/images/warsaw.png",
    },
    {
        name: "WARSAW2",
        img: "https://www.docplanner.com/images/warsaw.png", 
    },
    {
        name: "WARSAW3",
        img: "https://www.docplanner.com/images/warsaw.png", 
    },
    {
        name: "WARSAW4",
        img: "https://www.docplanner.com/images/warsaw.png",
    },
    {
        name: "WARSAW5",
        img: "https://www.docplanner.com/images/warsaw.png",
    },
    {
        name: "WARSAW6",
        img: "https://www.docplanner.com/images/warsaw.png",
    }
]

function Itemlives(props) {
    
    return (
       
        <div className="publication">
            {console.log(props.item.img)}
            <img src= {props.item.img} weight="311px" height="280px" />
                <div>
                    <h1>{props.item.name}</h1>
                    <button>SEE OPENING</button>
                </div>
        </div>
    );
}


function Listelives() {
    return (
        <div>
             <center>
                <h1 >Improve the lives of millions.<br /> Change yours forever </h1>
                <p style={{ marginLeft: "150px;", marginRight: " 150px;", marginTop: "50px;" }}> More than 1000 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Mexico City and Curitiba, our search for great talent never stops.</p>
            </center>
            <div className="liste-item"> 
                {tab4.map((el, index) => <Itemlives item={el} key={index} />)} 
            </div>
        </div>
    );
}



//----------------------------------------------------------------------------------------------------
let tab3 = [
    {
        name: "Leader in 10 countries",
        img:"https://www.docplanner.com/img/flag.png",
        description:"Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    },
    {
        name: "1.5 million appointments",
        img: "https://www.docplanner.com/img/visits.png",
        description: "booked last month"
    },
    {
        name: "Leader in 10 countries",
        img: "https://www.docplanner.com/img/patients.png",
        description: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    },
    {
        name: "Leader in 10 countries",
        img: "https://www.docplanner.com/img/patients.png",
        description: "Poland, Turkey, Spain, Italy, Czech Republic, Mexico, Brazil, Colombia, Argentina and Chile"
    } 
]

function Itemplatform(props) {
    return (
        <p>
            <img src={props.item.img} width = "35px" height = "40px" />
            <h1>{props.item.name}</h1>
            <p>{props.item.description}</p>
        </p>
    );
}


function Listeplatform() {
    return (   

        <div className="container2" >
            <div style={{marginLeft: "150px"}}>
                <h1>The world's <br />biggest healthcare platform</h1>
                    <p>We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>
                    <img src="https://www.docplanner.com/img/sygnet.png" width="500px" height="550px" />
            </div> 
            <div className="article">
                <div className="article1">
                    {tab3.map((el, index) => <Itemplatform item={el} key={index} />)}
                </div>
            </div>
        </div>
             
    );
}

//----------------------------------------------------------------------------------------------------
let tab2 = [
    {
        name: "ZnanyLekraz"  
    },
    {
        name: "Doctoralia"
    },
    {
        name:"MioDottore"
    },
    { 
        name:"DoktorTakvimi"
    },
    {   
        name:"ZnamyLekar" 
    }
]

function ItemLink(props) { 
    return ( 
        < a href='https://www.docplanner.com/img/logo-default-group-en.svg?v=1' weight="40px" height="50px" > {props.item.name}</a>  
    );
}


function ListeLink() {
    return (  
        <div className="container">
            <h1>We are a global company <br />with local culture</h1>
            <div className="lien">
                    <span>
                    {tab2.map((el, index) => <ItemLink item={el} key={index} />)}
                    </span>
            </div>
        </div>
    );
}


//----------------------------------------------------------------------------------------------------
let tab = [
    {
        name:"book a visit and solve any health-related doubt",
        img:"https://www.docplanner.com/img/screen-marketplace@2x.png",
        cader:"nbr1"

    },
    {
        name:"Save time managing visits and cut no-shows by half",
        img:"https://www.docplanner.com/img/screen-saas@2x.png",
        cader:"nbr2"
    }
]

function Itemcadre(props) { 
    let c = "cadre1 " +  props.item.cader    ;
    let btn =""
    if (props.item.cader === "nbr1") { btn = <button>CHOOSE COUNTRY</button> }
    return (
        <div className= {c}>
            <div>
                <span>For doctors,</span><h1 style={{color:"#ffffff"}}>{props.item.name}</h1>
            </div>
            <div className="image-cadre">
               {btn}
                <img src={props.item.img} weight="200px" height="200px" />
            </div>
        </div>
    );
}


function Listecadre() {
    return (
        <div className="cadre">
             
            {tab.map((el, index) => <Itemcadre item={el} key={index}  />)}
           
             
        </div>
    );
}


//----------------------------------------------------------------------------------------------------
function Experience() {
    return (
        <div className="Experience">
            <div className="logo">
                <img src="https://www.docplanner.com/img/sygnet.png" weight="100px" height="50px" />
            </div>
            <h1 className="titre">Making the healthcare experience more human</h1>
          <Liste/>
        </div>
    );
}


//----------------------------------------------------------------------------------------------------

function Marking() {
    return (
        <div className="Marking">
            <Experience />
            <Listecadre />
            <ListeLink />
            <Listeplatform />
            <Listelives />
            <Listecountries />
        </div>
    );
}

export default Marking;