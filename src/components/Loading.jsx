import useJsonFetch from "../hooks/useJsonFetch";
import Loader from "./Loader";

export default function Loading({ opts }) {

  const [{ loading }] = useJsonFetch(process.env.REACT_APP_BASE_URL, opts);

  return (
    loading ? 
    <div className="loading">
      <Loader />
      loading
    </div> : null
  )
}
