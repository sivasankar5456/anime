import AnimesList from "./AnimesList";

import UseFetch from "./UseFetch";




const Home = () => {


let {data:animes,pending,error}=UseFetch("https://api.jikan.moe/v4/anime")


    return ( 
        <div>
        

           { pending && <div id="loader" class="spinner-border text-danger" role="status">  </div>}

           {animes && <AnimesList animes={animes} />}


        </div>
     );
}
 
export default Home;































