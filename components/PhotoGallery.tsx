import { LegacyRef } from "react";
import { useState, useCallback } from "react";
import Gallery, { GalleryProps } from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import ImgsViewer from "react-images-viewer";

export default (props: GalleryProps) => {
    const photos = props.photos;
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((event, { photo, index }) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    return (
        <div>
            <Gallery photos={photos} onClick={openLightbox} />
            {viewerIsOpen ? (<ImgsViewer
                imgs={photos}
                currImg={currentImage}
                isOpen={viewerIsOpen}
                onClickPrev={() => setCurrentImage((currentImage - 1) % photos.length)}
                onClickNext={() => setCurrentImage((currentImage + 1) % photos.length)}
                onClose={closeLightbox}
            />) : null}
        </div>
    );
}
