import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import "./Gallery.css";

interface GalleryProps {
  pictures: PictureInterface[];
}

interface PictureInterface {
  url: string;
  title: string;
  description?: string;
  alt?: string;
  rows?: number;
  cols?: number;
}

const Gallery = ({pictures}: GalleryProps) => {
  function srcset(image: string, size: number, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
      srcSet: `${image}?w=${size * cols}&h=${
        size * rows
      }&fit=crop&auto=format&dpr=2 2x`,
    };
  }

  return (
    <div className="gallery-background">
      <ImageList
        className="gallery-container"
        variant="quilted"
        cols={8}
        rowHeight={200}
      >
        {pictures.map((item) => (
          <ImageListItem
            key={item.url}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.url, 121, item.rows, item.cols)}
              alt={item.title}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
};

export default Gallery;
