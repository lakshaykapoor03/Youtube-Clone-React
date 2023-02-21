const Button = () => {
  const arr = [
    "All",
    "Protein",
    "Movie",
    "Sports",
    "Gym",
    "Bodybuilding",
    "Workout",
    "Cricket",
    "Live",
    "Music"
  ];

  return (
    <>
      {arr.map((name, idx) => {
        return (
          <button key={idx} className="px-2 py-1 bg-gray-100 hover:bg-gray-300  rounded text-xs ">
            {name}
          </button>
        );
      })}
    </>
  );
};

export default Button;
