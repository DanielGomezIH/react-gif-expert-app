import GifGridItem from './GifGridItem';

import useFetchGifs from '../hooks/useFetchGifs';

const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {isLoading && <h2>Cargando...</h2>}

      <div className='card-grid'>
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} /* image={image} */ />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
