import Header from "../components/Header";
import {
  useContract,
  MediaRenderer,
  useActiveListings,
} from "@thirdweb-dev/react";

const Home = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT,
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);

  console.log(listings);

  return (
    <div>
      <Header />
      <main className="max-w-6xl mx-auto p-2">
        {loadingListings ? (
          <p className="text-center animate-pulse text-blue*-500">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-auto">
            {listings?.map((listing) => (
              <div
                className="flex flex-col card hover:scale-105 transition-all duration-150 ease-out"
                key={listing.id}
              >
                <div className="flex-1 flex-col pb-2 items-center">
                  <MediaRenderer className="w-44" src={listing.asset.image} />
                </div>
                <div className="pt-2 space-y-4">
                  <div>
                    <h2 className="text-lg truncate">{listing.asset.name}</h2>
                    <hr />
                    <p className="truncate text-sm text-gray-600 mt-2">
                      {listing.asset.description}
                    </p>
                  </div>

                  <p>
                    <span className="font-bold">
                      {" "}
                      {listing.buyoutCurrencyValuePerToken.displayValue}{" "}
                    </span>
                    {listing.buyoutCurrencyValuePerToken.symbol}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
