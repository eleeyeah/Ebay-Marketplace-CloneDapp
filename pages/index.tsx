import Header from "../components/Header";
import {
  useContract,
  MediaRenderer,
  useActiveListings,
} from "@thirdweb-dev/react";

const Home = () => {
  const { contract } = useContract(
    process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS,
    "marketplace"
  );

  const { data: listings, isLoading: loadingListings } =
    useActiveListings(contract);

  console.log(listings);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
