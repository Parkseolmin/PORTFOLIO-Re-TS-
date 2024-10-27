export default function GifGalleryDev() {
  const gifArray = [
    `/img/goalsGif/gif4.gif`,
    `/img/goalsGif/gif5.gif`,
    `/img/goalsGif/gif6.gif`,
  ];
  return (
    <div className='gif-container'>
      {gifArray.map((gif, index) => (
        <img key={index} src={gif} alt={`gif-${index}`} loading='eager' />
      ))}
    </div>
  );
}
