import { useState, useEffect } from "react";
import axios from "axios";

export default function Info() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:5000/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Загрузка данных...</p>;
  if (error) return <p className="text-red-500">Ошибка: {error}</p>;

  return (
    <main>
      <h1>Информация с сервера</h1>
      {data && (
        <div>
          <p>с сервера: {data.name}</p>
        </div>
      )}
      <a
        href="/"
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Переход на welcome
      </a>
    </main>
  );
}