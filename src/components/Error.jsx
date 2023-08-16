import useJsonFetch from "../hooks/useJsonFetch";

export default function Error({ opts }) {

  const [{ error }] = useJsonFetch(process.env.REACT_APP_BASE_URL, opts);

  return (
    error ?
      <div className="error">
        <h2>Полученая ошибка</h2>
        <p>получены ошибки: "{error}"</p>
      </div> : null
  )
}
