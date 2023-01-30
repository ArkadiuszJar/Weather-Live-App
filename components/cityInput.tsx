const CityInput = ({ location, setLocation, getLocation }: any) => {
  return (
    <div>
      <input
        type="text"
        value={location}
        onChange={(event) => setLocation(event.target.value)}
        onKeyDown={getLocation}
        placeholder="Enter city name"
        className=" mb-4 rounded-md border border-white bg-transparent py-2 px-4 text-white focus:outline-none  active:outline-none"
        required
      />
    </div>
  );
};

export default CityInput;
