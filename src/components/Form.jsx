import { LuPoundSterling, LuPercent } from "react-icons/lu";
import calculator from "../assets/images/icon-calculator.svg";
import { useGlobalContext } from "../context";

function Form() {
  const {
    mortgageAmount,
    setMortgageAmount,
    mortgageTerm,
    setMortgageTerm,
    interestRate,
    setIntersetRate,
    mortgageType,
    setMortgageType,
    isError,
    handleSubmit,
  } = useGlobalContext();

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={
          isError.includes("mortgageAmount")
            ? "form-label error-state"
            : "form-label"
        }
      >
        <label htmlFor="mortgage">Mortgage Amount</label>
        <div className="input-container ">
          <LuPoundSterling className="symbol symbol-left" />
          <input
            type="number"
            id="mortgage"
            name="mortgage"
            value={mortgageAmount}
            onChange={(e) => setMortgageAmount(e.target.value)}
          />
        </div>
        <p className="error">This field is required</p>
      </div>
      <div
        className={
          isError.includes("mortgageTerm")
            ? "form-label error-state"
            : "form-label"
        }
      >
        <label htmlFor="term">Mortgage Term</label>
        <div className="input-container">
          <input
            type="number"
            id="term"
            name="term"
            value={mortgageTerm}
            onChange={(e) => setMortgageTerm(Number(e.target.value))}
          />
          <p className="symbol symbol-right">years</p>
        </div>
        <p className="error">This field is required</p>
      </div>
      <div
        className={
          isError.includes("interestRate")
            ? "form-label error-state"
            : "form-label"
        }
      >
        <label htmlFor="interest">Interest Rate</label>
        <div className="input-container ">
          <input
            type="number"
            id="interest"
            name="interest"
            value={interestRate}
            onChange={(e) => setIntersetRate(Number(e.target.value))}
          />
          <LuPercent className="symbol symbol-right" />
        </div>
        <p className="error">This field is required</p>
      </div>
      <div
        className={
          isError.includes("mortgageType")
            ? "form-label error-state"
            : "form-label"
        }
      >
        <p>Mortgage Type</p>
        <label className="input-container type">
          <input
            type="radio"
            id="mortgageType"
            name="type"
            checked={mortgageType === "repayment"}
            value={"repayment"}
            onChange={(e) => setMortgageType(e.target.value)}
          />
          Repayment
        </label>
        <label className="input-container type">
          <input
            type="radio"
            id="InterestOnly"
            name="type"
            checked={mortgageType === "interestOnly"}
            value={"interestOnly"}
            onChange={(e) => setMortgageType(e.target.value)}
          />
          Interest Only
        </label>
        <p className="error">This field is required</p>
      </div>

      <button type="submit" className="btn">
        <img src={calculator} alt="calculator icon" aria-hidden="true" />
        Calculate Repayments
      </button>
    </form>
  );
}

export default Form;
