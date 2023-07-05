const ErrorPage = () => {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "50dvh" }}>
        <div className="bg-light p-5 text-center">
          <h1>Opps, Something went wrong !</h1>
          <a href="/home">
            <u>Go back to the Home Page</u>
          </a>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
