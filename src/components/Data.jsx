import useJsonFetch from "../hooks/useJsonFetch";

export default function Data({ opts }) {

  const [{ data }] = useJsonFetch(process.env.REACT_APP_BASE_URL, opts);

  return (
    data ?
      <div className="data">
        <h2>Данные получены</h2>
        <p>получены данные: status "{data.status}"</p>
      </div> : null
  )
}
