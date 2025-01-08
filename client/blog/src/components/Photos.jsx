const Photos = () => {
  const foodPics = import.meta.glob("/public/foodpics/*");
  const imageUrls = Object.keys(foodPics).map((path) =>
    path.replace("/public", "")
  );

  return (
    <div>
      <h1 style={{ textAlign: "center", fontFamily: "Playfair Display, serif", fontWeight: "300", paddingTop: "2rem" }}>Gallery</h1>
      <div
        className="image-board"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          padding: "25px",
        }}
      >
        {imageUrls.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Food image ${index + 1}`}
            style={{
              width: "calc(50% - 30px)",
              height: "400px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
              minWidth: "300px",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Photos;
