// An array containing HTML elements
const numbersList = [<li key={"1"}>1</li>, <li key={"2"}>2</li>, <li key={"3"}>3</li>, <li key={"4"}>4</li>];

function List() {
  return (
    <div className="list">
      <h2>List</h2>
      {numbersList.map((el, idx)=><div key={idx}>{el} </div>)}
    </div>
  );
}

export default List;
