import { useGlobalContext } from "../context";
import EmptyResult from "./EmptyResult";
import CompletedResult from "./CompletedResult";
function Result() {
  const { isCompleted } = useGlobalContext();
  return (
    <section className="result">
      {isCompleted ? <CompletedResult /> : <EmptyResult />}
    </section>
  );
}

export default Result;
