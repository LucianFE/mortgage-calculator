import { useGlobalContext } from "../context";

function FormDataHeader() {
  const { handleClearAll } = useGlobalContext();
  return (
    <article className="form-data-header">
      <h1>Mortgage Calculator</h1>
      <button className="clear-btn" onClick={handleClearAll}>
        Clear All
      </button>
    </article>
  );
}

export default FormDataHeader;
