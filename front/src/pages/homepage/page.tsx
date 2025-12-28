import { Welcome } from "@/widgets";
import { FoodSearch } from "./foodSearch";

const HomePage = () => {
    return (
        <div className="homepage">
            <FoodSearch />
            {/* <Welcome /> */}
        </div>
    );
};

export default HomePage;