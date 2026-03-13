function CurrentSituation() {

  const now = new Date();

  return (
    <div className ="lead">
      <p>Current Date and Time:<i>
      {now.toString()}</i></p>
    </div>
  );
}
export default CurrentSituation;
