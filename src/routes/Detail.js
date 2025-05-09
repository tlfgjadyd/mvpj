import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams(); //id값 id에 저장
  const [movieDetails, setMovieDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovieDetails(json.data.movie);
    setLoading(false);
    //console.log();
  }; //id값 받아온 무비의 json

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h1 style={{ textAlign: "center" }}>{movieDetails.title}</h1>
          <img
            style={{ padding: "20px", margin: "auto", display: "block" }}
            src={movieDetails.medium_cover_image}
            alt={movieDetails.title}
          ></img>
          <table border={1} style={{ margin: "auto" }}>
            <thead style={{ backgroundColor: "tomato", textAlign: "center" }}>
              <tr>
                <th>제작년도</th>
                <th>런타임</th>
                <th>장르</th>
                <th>영화URL</th>
                <th>평점</th>
              </tr>
            </thead>
            <tbody style={{ textAlign: "center" }}>
              <tr>
                <td>{movieDetails.year}</td>
                <td>{movieDetails.runtime}</td>
                <td>{movieDetails.genres}</td>
                <td>
                  <a rel="noreferrer" target="_blank" href={movieDetails.url}>
                    {movieDetails.url}
                  </a>
                </td>
                <td>{movieDetails.rating}</td>
              </tr>
            </tbody>
          </table>
          <button
            style={{
              position: "fixed",
              top: "0",
              left: "0",
              backgroundColor: "transparent",
              border: "0",
              fontSize: "20px",
            }}
          >
            <Link style={{ textDecoration: "none" }} to={`/`}>
              x
            </Link>
          </button>
        </div>
      )}
    </div>
  ); //map쓸 필요X json 1개임
}

export default Detail;

// Detail에 영화 상세정보 띄우기
// year, runtime, rating, title, url, genre, coverimage 띄우기
