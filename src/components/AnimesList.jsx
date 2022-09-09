import { useEffect, useState } from "react";


const AnimesList = ({ animes }) => {

    let [wish, setWish] = useState([]);

    useEffect(() => {
        if (localStorage.getItem("wish") == null)   // if wish is not present before 
        {

            localStorage.setItem("wish", "[]");  // then only you ad wish arry
        }
    }, [])


    let handleWishList = (id) => {
        let x = localStorage.getItem("wish");
        x = JSON.parse(x)

        if (!x.includes(id)) {
            x.push(id)
            x = JSON.stringify(x)
            localStorage.setItem("wish", x)
            alert("item is added to  wishList")



            // console.log(x)
            // console.log(x,typeof(x));
        } else {
let i=x.indexOf(id);
x.splice(i,1)
x=JSON.stringify(x)
localStorage.setItem("wish",x)

            alert("item is removed from  wishList")
        }

    }



    return (
        <div className="animes-list" >
            {
                animes.map((anime) => {
                    return (
                        <center>

                            <div key={anime.mal_id} className="anime">
                                <img
                                    src={anime.images.jpg.small_image_url} alt="poster not found" />
                                <h1>Title:{anime.title}</h1>
                                <h1>Type:{anime.type}</h1>
                                <h1>Year:{anime.year}</h1>
                                <button

                                    onClick={() => { handleWishList(anime.mal_id) }}
                                >&#10084;</button>
                            </div>
                        </center>

                    )
                })}
        </div>
    );
}

export default AnimesList;


// components ,multiple components jsx














// import { useEffect, useState } from "react";


// const AnimesList = ({ animes }) => {

//     let [wish,setWish]=useState([]);
//     useEffect(()=>{
// localStorage.setItem("wish","[]");
//     },[])

//     let handleWishList=(id)=>{
// let x=localStorage.getItem("wish");
// // x=JSON.parse(x)
// x.push(id)
// x=JSON.stringify(x)
// localStorage.setItem("wish",x)

// console.log(x);
// console.log(x,typeof(x));
//     }



//     return (
//             <div className="animes-list" >
//                 {
//                     animes.map((anime) => {
//                         return (
//                             <center>

//                             <div key={anime.mal_id} className="anime">
//                                 <img
//                                 src={anime.images.jpg.small_image_url} alt="poster not found" />
//                                 <h1>Title:{anime.title}</h1>
//                                 <h1>Type:{anime.type}</h1>
//                                 <h1>Year:{anime.year}</h1>
//                                 <button

//                                onClick={()=>{handleWishList(anime.mal_id)}}
//                                >&#10084;</button>
//                             </div>
//                             </center>

//                         )
//                     })}
//             </div>
//     );
// }

// export default AnimesList;





















































