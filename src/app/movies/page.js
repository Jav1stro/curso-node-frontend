// 'use client'
import styles from "./page.module.css";

import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";

export default async function Movies() {
  const movies = await getMovies();
  console.log("movies,", movies);

  // const handleDelete = async (id) => {
  //   // La URL de la API para eliminar la película
  //   const apiUrl = `http://localhost:1234/movies/${id}`;

  //   console.log("asd");

  //   // Realiza la solicitud DELETE a la API
  //   await axios
  //     .delete(apiUrl)
  //     .then((response) => {
  //       // Maneja la respuesta de la API, por ejemplo, mostrar un mensaje de éxito
  //       console.log("Película eliminada con éxito");
  //     })
  //     .catch((error) => {
  //       // Maneja los errores, por ejemplo, mostrando un mensaje de error
  //       console.error("Error al eliminar la película", error);
  //     });
  // };

  return (
    <main className={styles.main}>
      <Header />
      <div className={styles.grid}>
        {movies.map((movie) => {
          return (
            <div key={movie.id} className={styles.card}>
              <h2>{movie.title}</h2>
              <Image
                src={movie.poster}
                width={300}
                height={400}
                alt={movie.title}
                className="image"
              />
              <p>{movie.year}</p>
              <p>{movie.id}</p>

              <Link href={`/movies/${movie.id}`}>Información</Link>
              {/* <button onClick={() => handleDelete(movie.id)}>Eliminar</button> */}
              <button>Eliminar</button>
            </div>
          );
        })}
      </div>
      <Footer />
    </main>
  );
}

async function getMovies() {
  const res = await fetch("http://localhost:1234/movies");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
