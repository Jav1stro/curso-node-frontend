import Image from "next/image";
import Rating from '@mui/material/Rating';
import styles from './page.module.css'

export default async function MovieInfo({ params }) {
  const data = await getMovieInfo(params.id);
  console.log('data.rate', data.movie.rate);
  

  return (
    <div className={styles.container}>

      <a href='/movies'>Back</a>
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "30px auto",
        backgroundColor: "rgba(255,255,55,0.2)",
        color:'white',
        borderRadius: "10px",
        width: "500px",
        height: "600px",
        textAlign: "center",
        gap:'10px',
      }}
    >
      <h1>{data.movie.title}</h1>
      <p>{data.movie.director}</p>
      <p>{data.movie.year}</p>
      <Image
        src={data.movie.poster}
        width={300}
        height={400}
        alt={data.movie.title}
        className="image"
      />
      <Rating name="read-only" value={data.movie.rate/2} readOnly />
    </div>
    </div>

  );
}

async function getMovieInfo(id) {
  console.log("id", id);

  const res = await fetch(`http://localhost:1234/movies/${id}`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
