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

  const { data: listing, isLoading: loadingListings } =
    useActiveListings(contract);

  console.log(listing);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Home;
