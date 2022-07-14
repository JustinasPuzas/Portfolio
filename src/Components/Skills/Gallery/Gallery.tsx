import { Divider } from "@mui/material";

interface GalleryProps {
    pictures: PictureInterface[];
}

interface PictureInterface {
    url: string;
    title: string;
    description?: string;
    alt?: string;
}

const Gallery = ({pictures}:GalleryProps) => {
  return <>
    <div className="dialog-gallery-container">
        {pictures.map(({url, title, description, alt}) => {
            return <>
            
            </>
        })}

    </div>
    <Divider />
  </>;
};

export default Gallery;
