


const Button = ({showResults}) => {
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
    "Music",
    "Mixes",
    "Computer Programming",
    "Gaming",
    "Game Shows",
    "Motivation",
    "Study Skills"
  ];



  return (
    <>
      {arr.map((name, idx) => {
        return (
      
       
            <button key={idx} onClick={()=> showResults(name)} className="px-2 py-1 bg-gray-100 hover:bg-gray-300  rounded text-xs ">
            {name}
          </button>
      
        
        );
      })}
    </>
  );
};

export default Button;
