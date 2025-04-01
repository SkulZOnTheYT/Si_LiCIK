import CountryMap from "./CountryMap";

export default function DemographicCard() {
  const provinces = [
    {
      name: "DKI Jakarta",
      customers: "2,379 Customers",
      percentage: 79,
      imgSrc: "/provinsi/jakarta.png",
      imgAlt: "jakarta",
    },
    {
      name: "DI Yogyakarta",
      customers: "589 Customers",
      percentage: 23,
      imgSrc: "/provinsi/yogyakarta.png",
      imgAlt: "yogyakarta",
    },
    {
      name: "Kalimantan Tengah",
      customers: "450 Customers",
      percentage: 18,
      imgSrc: "/provinsi/kalteng.png",
      imgAlt: "kalimantan-tengah",
    },
    {
      name: "Sumatera Utara",
      customers: "320 Customers",
      percentage: 12,
      imgSrc: "/provinsi/sumut.jpg",
      imgAlt: "sumatera-utara",
    },
    {
      name: "Bali",
      customers: "780 Customers",
      percentage: 31,
      imgSrc: "/provinsi/bali.png",
      imgAlt: "bali",
    },
  ];

  const sortedProvinces = provinces.sort((a, b) => b.percentage - a.percentage);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] sm:p-6">
      <div className="flex justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Customers Demographic
          </h3>
          <p className="mt-1 text-gray-500 text-sm dark:text-gray-400">
            Number of customers based on province
          </p>
        </div>
      </div>
      <div className="px-4 py-6 my-6 overflow-hidden border border-gray-200 rounded-2xl dark:border-gray-800 sm:px-6">
        <div
          id="mapOne"
          className="mapOne map-btn -mx-4 -my-6 h-[212px] w-[252px] 2xsm:w-[307px] xsm:w-[358px] sm:-mx-6 md:w-[668px] lg:w-[634px] xl:w-[393px] 2xl:w-[554px]"
        >
          <CountryMap />
        </div>
      </div>

      <div className="space-y-5">
        {sortedProvinces.map((province) => (
          <div key={province.name} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="items-center w-full rounded-full max-w-8">
                <img src={province.imgSrc} alt={province.imgAlt} />
              </div>
              <div>
                <p className="font-semibold text-gray-800 text-sm dark:text-white/90">
                  {province.name}
                </p>
                <span className="block text-gray-500 text-xs dark:text-gray-400">
                  {province.customers}
                </span>
              </div>
            </div>
            <div className="flex w-full max-w-[140px] items-center gap-3">
              <div className="relative block h-2 w-full max-w-[100px] rounded-sm bg-gray-200 dark:bg-gray-800">
                <div
                  className="absolute left-0 top-0 h-full rounded-sm bg-yellow-500"
                  style={{ width: `${province.percentage}%` }}
                />
              </div>
              <p className="font-medium text-gray-800 text-sm dark:text-white/90">
                {province.percentage}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}