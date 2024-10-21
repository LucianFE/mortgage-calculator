import illustration from "../assets/images/illustration-empty.svg";
function EmptyResult() {
  return (
    <article className="empty-result">
      <img src={illustration} alt="Illustration" aria-hidden="true" />
      <h2>Results shown here</h2>
      <p>
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </article>
  );
}

export default EmptyResult;
