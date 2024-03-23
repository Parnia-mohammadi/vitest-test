function ErrorMessage({ count }) {
  return (
    <div style={{ opacity: 1 }}>
      <p role="note">
        {count}
        {count == 1 ? " Error" : " Errors"} occured.
        <span>hi</span>
      </p>
      <input type="text" value="parnia" />
    </div>
  );
}

export default ErrorMessage;
