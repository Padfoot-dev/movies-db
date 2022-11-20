import Navbar from './components/navbar/Navbar.component';
import SearchBox from './components/SearchBox/Searchbox.component';
import CardList from './components/cardList/CardList.component';
import {useState, useEffect} from "react";
import './App.css';
import ReactPaginate from 'react-paginate';
import axios from 'axios';
import "./components/pagination/pagination.style.css"
import Loader from './components/Loader/Loader.component';
import Modal from './components/Modal/Modal.component';

function App() {

  const [loading, setLoading] = useState(true);
  const [searchField,setSearchField] = useState("");
  const [movies , setMovies] = useState([]);
  const [pages, setPages] = useState(1);
  const [total, setTotal] = useState();
  const [movie , setMovie] = useState({});
  const [showPop , setShowPop] = useState(false);

  useEffect(() => {
    fetchCall();
  }, []);

  const onChangeHandler = (val)=> {
    setSearchField(val)

  }
    
const handlePageClick = e => {
    console.log(e.selected);
    fetchCall(searchField, (e.selected + 1));
  }

  const handleSubmit = (event)=> {
    event.preventDefault();

        fetchCall(searchField,pages)
  }

 


const fetchCall = (searchField='war',page =1)=>{
  setLoading(true);
     axios.get(`https://www.omdbapi.com/?s=${encodeURIComponent(searchField)}&page=${page}&apikey=ff9fabc`)
    .then(response => {

      if(response.data.Search) {
      setMovies(response.data.Search);
      setTotal(Math.ceil(response.data.totalResults/10));
      setPages(page);
      setLoading(false);
      } else {
 
      setMovies([]);
      setLoading(false);
      console.log(movies)
      }

    })


  }

  const handleModal = (movieId)=> {
    movieFetchCall(movieId);
  }

  const movieFetchCall =  (movieId) => {
    axios.get(`https://www.omdbapi.com/?apikey=ff9fabc&i=${movieId}&plot=full`)
    .then(response => {
      setMovie(response.data);

      setShowPop(true);
    });

  }


  


  return (
    <div className="App">
      <Navbar />
      
      <SearchBox handleSubmit={handleSubmit} onChangeHandler={onChangeHandler} />

      {showPop ? <Modal {...movie} closeModal={()=> {setShowPop(false)}}/> : null}

      { loading ? <Loader /> : 
        (movies.length === 0 ? 
         <div className='error'>
           No movie found...
           <i className="far fa-grin-beam-sweat"></i>
         </div> : <CardList movies={movies} handleModal={handleModal} />) }


            <div className='paginate'>
        <ReactPaginate 
          previousLabel={"Back"}
          nextLabel={"Next"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(total)}
          marginPagesDisplayed={1}
          pageRangeDisplayed={4}
          onPageChange={handlePageClick}
          containerClassName={"pagination"}
          subContainerClassName={"pages pagination"}
          activeClassName={"active"}
          />
      </div>



    </div>
  );
}

export default App;
