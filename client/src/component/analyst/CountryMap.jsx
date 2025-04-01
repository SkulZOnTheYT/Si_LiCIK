const CountryMap = () => {

  const markers = [
    { name: "DKI Jakarta", xPercent: 24, yPercent: 36 }, 
    { name: "DI Yogyakarta", xPercent: 30, yPercent: 40 },
    { name: "Kalimantan Tengah", xPercent: 33, yPercent: 24 },
    { name: "Sumatera Utara", xPercent: 8, yPercent: 12 },
    { name: "Bali", xPercent: 38, yPercent: 40 },
  ];

  return (
    <div className="w-[550px] h-[400px] relative">
      <img
        src="/indonesia.svg"
        alt="Peta Indonesia"
        className="text-center h-[190px] object-cover"
      />
      {markers.map((marker) => (
        <div
          key={marker.name}
          className="absolute"
          style={{
            left: `${marker.xPercent}%`,
            top: `${marker.yPercent}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <svg width="12" height="12">
            <circle cx="6" cy="6" r="6" fill="#465FFF" stroke="white" strokeWidth="1.5" />
          </svg>
        </div>
      ))}
    </div>
  );
};

export default CountryMap;