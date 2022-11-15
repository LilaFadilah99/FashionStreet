function CircleImage({ imageUrl, ...style }) {
  return (
    <>
      <img className="img-fluid rounded-full" src={imageUrl} style={{ ...style, objectFit: "cover" }} />
    </>
  );
}

export default CircleImage;
