import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Seo from '@/components/Seo';
import Link from 'next/link';

export default function Home({ results }) {
  const router = useRouter();
  const onClick = (id, title) => {
    router.push({
      pathname:`/movies/${id}`,
      query:{
        title,
      }
    }, `/movies/${title}/${id}`);
  };
  return (
    <>
      <div className="container">
        <Seo title="Home" />
        {results?.map((movie) => (
          <div key={movie.id}>
            <div className="movie" onClick={() => onClick(movie.id, movie.original_title)}>
              <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
              <h4>
                <Link href={{
                  pathname : `/movies/${movie.original_title}/${movie.id}`,
                  query: {
                    title: movie.original_title
                  }
                }} as={`/movies/${movie.id}`}>{movie.original_title}</Link>
              </h4>
            </div>
          </div>
        ))}
      </div>
      <style jsx>{`
        .container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          padding: 20px;
          gap: 20px;
        }
        .movie img {
          max-width: 100%;
          border-radius: 12px;
          transition: transform 0.2s ease-in-out;
          box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
        }
        .movie:hover img {
          transform: scale(1.05) translateY(-10px);
        }
        .movie h4 {
          font-size: 18px;
          text-align: center;
        }
      `}</style>
    </>
  );
}

export async function getServerSideProps() {
  const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

  return {
    props: {
      results,
    },
  };
}
