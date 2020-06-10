import React from 'react';
import NavBar from "./NavBar";
import Caraousel from "./Caraousel";
import MovieCard from "./MovieCard";
import SingleMovie from "./SingleMovie"
import "./App.css";

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      All:[],
      Comedy :[],
      Action: [],
      Horror: [],
      movieDetail: [],
      details: false
    }
  }

  async componentDidMount(){
    // const url = "https://api.themoviedb.org/3/discover/movie?api_key=310cd168feeee489c730aeae47849e33&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12"
    const url = "http://localhost:8000/api/movie/all"
    fetch(url)
     .then(response=>response.json())
     .then(data=>
      {
        let res = [];
        data.results.forEach(element => {
          res.push(element);
        });
        
        this.setState({All:res, Comedy:res, Action:res, Horror: res});

      });
    // console.log("resut",res);
    // console.log("newstate",this.state);
  }


  handleShowDetails=(movie)=>
   {
    console.log("handleclick",movie);
    const{All}=this.state;
    let movieDetail=All.filter(ele => 
      ele._id == movie._id);

     this.setState({
       details:true,movieDetail:movieDetail
      });
   }

   handleSwitchDetails=()=>
   {
     this.setState({details:false});
   }

  render(){
    const{  All, Comedy, Action, Horror, details,movieDetail} = this.state;
    return(

      <div className="mainScreen">
        <NavBar />
        {details ? <SingleMovie movie={movieDetail}  handleSwitchDetails={this.handleSwitchDetails}/> : 
          <div>

            <div><Caraousel/></div>

            <div className="list">
               <h3 className="head">Comedy</h3>
                <ul className="individual-list">
                {
                  Comedy.map(ele=>
                      <li key={ele.id} className="card">
                        <MovieCard movie={ele} handleShowDetails={this.handleShowDetails} /> 
                      </li>
                    )
                }
                </ul>
              </div>

              <div className='list'>
                <h3 className="head">Horror</h3>
                <ul className="individual-list">
                {
                  Horror.map(ele=>
                      <li key={ele.id} className="card"> 
                        <MovieCard movie={ele} handleShowDetails={this.handleShowDetails} />
                      </li>
                    )
                }
                </ul>
              </div>

              <div className='list'>
                <h3 className="head">Action</h3>
                <ul className="individual-list">
                {
                  Action.map(ele=>
                      <li key={ele.id} className="card">
                        <MovieCard movie={ele} handleShowDetails={this.handleShowDetails} />
                      </li>
                  )
                }
                </ul>
              </div>
            
          </div>
        }
        </div>
        
    );

  }
}


export default App;
