const DonorForm = () => {
    return (
      <>
        <div class="container">
          <div class="page-header">
            <div class="row">
              <div class="col-md-6 col-sm-6">
                <h2 class="page-title">Donate Now!</h2>
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
                  <span>Enter Sender's Information</span>
                </h4>
                <form>
                  <fieldset>
                    <label for="email">
                      Email : <span>Enter Email Address</span>
                    </label>
                    <input type="email" id="email" name="email" class="form-input" />
                  </fieldset>
                  <fieldset>
                    <label for="name">
                      Name : <span>Enter Sender's name</span>
                    </label>
                    <input type="text" id="name" name="name" class="form-input" />
                  </fieldset>
                  <fieldset>
                    <label for="amount">
                      Donation Amount : <span>Enter The amount you want to donate</span>
                    </label>
                    <input type="text" id="amount" name="amount" class="form-input" />
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
  
  export default DonorForm;