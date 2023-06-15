import { useGlobalContext } from "./Context";
const Home = () => {
  const { copy } = useGlobalContext();
  return <div>{copy}</div>;
};
export default Home;
