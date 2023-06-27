const LoginPage = () => {
  return (
    <>
      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Login</h2>
            </div>
            <div class="col-md-6 col-sm-6 hidden-xs back-home">
              <a href="/">&larr; Go back Home</a>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12">
            <div class="box-content donate-form">
              <h4 class="widget-title">
                <span>Enter Login Information</span>
              </h4>
              <form>
                <fieldset>
                  <label for="address">
                    Email : <span>Enter Email Address</span>
                  </label>
                  <input type="text" id="address" name="address" class="form-input" />
                </fieldset>
                <fieldset>
                  <label for="address2">
                    Password : <span>Enter Password</span>
                  </label>
                  <input type="text" id="address2" name="address2" class="form-input" />
                </fieldset>
              </form>
            </div>
            <div class="big-button">
              <fieldset>
                <button type="submit" id="submit-button" class="big-white">
                  Sign In
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
