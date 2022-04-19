import SolutionTile from "./SolutionTile";

const SolutionList = ({words, scrollRef}) => {
  return (
    <div className="solution_container" ref={scrollRef}>
      <p>{words.length} words found</p>
      <div className="solution_list">
        {words.map((word, index) => <SolutionTile key={index} word={word}/>)}
      </div>
    </div>
   );
}

export default SolutionList;