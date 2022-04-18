import SolutionTile from "./SolutionTile";

const SolutionList = ({words}) => {
  return (
    <div className="solution_container">
      <p>{words.length} words found</p>
      <div className="solution_list">
        {words.map((word, index) => <SolutionTile key={index} word={word}/>)}
      </div>
    </div>
   );
}

export default SolutionList;