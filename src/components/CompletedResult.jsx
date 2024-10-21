import { FaPoundSign } from "react-icons/fa";
import { useGlobalContext } from "../context";

function CompletedResult() {
  const {
    mortgageType,
    monthlyPay,
    monthlyInterest,
    totalInterest,
    totalPay,
    formatNumber,
  } = useGlobalContext();
  return (
    <article className="completed-result">
      <h2>Your Results</h2>
      <p>
        Your results are shown below based on the information you provided. To
        adjust the results, edit the form and click “calculate repayments”
        again.
      </p>
      <div className="result-card">
        <p>Your monthly repayments</p>
        <span className="accent-txt">
          {" "}
          <FaPoundSign />
          {mortgageType === "repayment"
            ? formatNumber(monthlyPay)
            : formatNumber(monthlyInterest)}
        </span>
        <div className="line"></div>
        <p>Total you`ll repay over the term</p>
        <span className="white-txt">
          <FaPoundSign />
          {mortgageType === "repayment"
            ? formatNumber(totalPay)
            : formatNumber(totalInterest)}
        </span>
      </div>
    </article>
  );
}

export default CompletedResult;
