export default function GifGalleryDev() {
  const gifArray = [
    `/img/devGif/gif1.gif`,
    `/img/devGif/gif2.gif`,
    `/img/devGif/gif3.gif`,
  ];
  return (
    <div className='gif-container'>
      {gifArray.map((gif, index) => (
        <img key={index} src={gif} alt={`gif-${index}`} />
      ))}
    </div>
  );
}
