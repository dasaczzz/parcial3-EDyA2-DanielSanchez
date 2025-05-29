import { useState } from "react";
import { CitiesGraph } from "../components/index/CitiesGraph"
import { TreeZones } from "../components/index/TreeZones";
import { useDispatch } from "react-redux";
import { removeCity } from "../store/slices/citiesSlice";

export const Index = () => {
  const dispatch = useDispatch();
  const [selectedCity, setSelectedCity] = useState(null);

  const handleDeleteCity = () => {
    if (selectedCity) {
      dispatch(removeCity(selectedCity.id));
      setSelectedCity(null);
    }
  };

  return (
    <section className='flex justify-between h-full'>
      <div className='flex flex-col w-full h-full gap-4 p-4'>
        <h1 className='font-bold text-3xl '>Cities</h1>
        <CitiesGraph setSelectedCity={setSelectedCity} />
        <button
          onClick={handleDeleteCity}
          disabled={!selectedCity}
          className={`px-4 py-2 w-1/3 rounded text-white ${
            selectedCity ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Eliminar ciudad
        </button>
      </div>
      <div className="flex flex-col p-2 gap-4 w-1/2">
        <h1 className='font-bold text-3xl'>Green zones</h1>
        {selectedCity ? (
          <TreeZones selectedCity={selectedCity} />
        ) : (
          <p>Haz clic en una ciudad para ver sus zonas.</p>
        )}
      </div>
    </section>
  )
}
