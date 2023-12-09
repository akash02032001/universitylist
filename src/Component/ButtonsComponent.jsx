
const ButtonsComponent = ({ handleHighest, handleLowest }) => {
  
  return (
    <div>
      <button onClick={handleHighest}>Country with Highest Universities</button>
      <button onClick={handleLowest}>Country with Lowest Universities</button>
    </div>
  );
};

export default ButtonsComponent;

