const PartnerDashboard = () => {
  return (
    <>
      <div className="partner-div">
        <h1>Proses Meals Request</h1>
        <div className="partner-container">
          <div className="table-wrapper">
            <table className="partner-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Drive Name</th>
                  <th>Member Name</th>
                  <th>Meals</th>
                  <th>Driver Schedule</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Drive Name 1</td>
                  <td>Member Name 1</td>
                  <td>Meals 1</td>
                  <td>Driver Schedule 1</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Drive Name 2</td>
                  <td>Member Name 2</td>
                  <td>Meals 2</td>
                  <td>Driver Schedule 2</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>                
                <tr>
                  <td>3</td>
                  <td>Drive Name 3</td>
                  <td>Member Name 3</td>
                  <td>Meals 3</td>
                  <td>Driver Schedule 3</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Drive Name 4</td>
                  <td>Member Name 4</td>
                  <td>Meals 4</td>
                  <td>Driver Schedule 4</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Drive Name 5</td>
                  <td>Member Name 5</td>
                  <td>Meals 5</td>
                  <td>Driver Schedule 5</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Drive Name 6</td>
                  <td>Member Name 6</td>
                  <td>Meals 6</td>
                  <td>Driver Schedule 6</td>
                  <td><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                {/* Tambahkan baris data sesuai kebutuhan */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerDashboard;
