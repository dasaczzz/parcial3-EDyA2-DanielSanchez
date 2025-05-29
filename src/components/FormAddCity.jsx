import { useState } from "react";
import { addCity } from "../store/slices/citiesSlice";
import { useDispatch, useSelector } from "react-redux";

export const FormAddCity = () => {
  const dispatch = useDispatch();
  const {nodes} = useSelector(state => state.cities.cities);
  const [name, setName] = useState("");
  const [connections, setConnections] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    const newCityId = name.trim().toLowerCase().replace(/\s+/g, "-");
    const newCity = {
      id: newCityId,
    };

    const links = connections.map(connId => ({
      source: newCityId,
      target: connId,
    }));

    dispatch(addCity({ city: newCity, links }));

    setName("");
    setConnections([]);
  };

  const toggleConnection = (id) => {
    setConnections((prev) =>
      prev.includes(id)
        ? prev.filter(conn => conn !== id)
        : [...prev, id]
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded shadow max-w-md">
      <h2 className="text-xl font-bold">Agregar Ciudad</h2>
      
      <input
        type="text"
        placeholder="Nombre de la ciudad"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="w-full border p-2 rounded"
      />

      <div>
        <h3 className="font-semibold mb-2">Conectada con:</h3>
        <div className="grid grid-cols-2 gap-2 max-h-40 overflow-y-auto">
          {nodes.map(city => (
            <label key={city.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={city.id}
                checked={connections.includes(city.id)}
                onChange={() => toggleConnection(city.id)}
              />
              {city.id}
            </label>
          ))}
        </div>
      </div>

      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Agregar ciudad
      </button>
    </form>
  );
}
