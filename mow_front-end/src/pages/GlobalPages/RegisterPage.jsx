const RegisterPage = () => {
  return (
    <>
      <div class="container">
        <div class="page-header">
          <div class="row">
            <div class="col-md-6 col-sm-6">
              <h2 class="page-title">Registration</h2>
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
                <span>Register Information</span>
              </h4>
              <form>
                <fieldset>
                  <label for="address">
                    Full Name: <span>Full name here</span>
                  </label>
                  <input type="text" id="address" name="address" class="form-input" />
                </fieldset>
                <fieldset>
                  <label for="address2">
                    Email : <span>Your email address</span>
                  </label>
                  <input type="text" id="address2" name="address2" class="form-input" />
                </fieldset>
                <fieldset>
                  <label for="city">
                    Join as : <span>City name</span>
                  </label>
                  <select name="" id="">
                    <option value="">- Choose a role -</option>
                    <option value="">Volunteer</option>
                    <option value="">Caregiver</option>
                    <option value="">Partner</option>
                    <option value="">Member</option>
                    <option value="">Donor</option>
                  </select>
                </fieldset>
                <fieldset>
                  <label for="country">
                    Password : <span>Enter password</span>
                  </label>
                  <input type="text" id="country" name="country" class="form-input" />
                </fieldset>
                <fieldset>
                  <label for="country">
                    Confirm Password : <span>Enter password again</span>
                  </label>
                  <input type="text" id="zipcode" name="zipcode" class="form-input" />
                </fieldset>
              </form>
            </div>
            <div class="big-button">
              <fieldset>
                <button type="submit" id="submit-button" class="big-white">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
