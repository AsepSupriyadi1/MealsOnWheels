const PartnerDashboard = () => {
  return (
    <>
      <div className="partner-div">
        <h1>Proses Meals Request</h1>
        <div className="partner-container">
          <div className="table-wrapper">
            <table className="partner-table">
              <thead>
                <tr className="partner-tr">
                  <th className="partner-th">No</th>
                  <th className="partner-th">Drive Name</th>
                  <th className="partner-th">Member Name</th>
                  <th className="partner-th">Meals</th>
                  <th className="partner-th">Driver Schedule</th>
                  <th className="partner-th">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="partner-tr">
                  <td className="partner-td">1</td>
                  <td className="partner-td">Drive Name 1</td>
                  <td className="partner-td">Member Name 1</td>
                  <td className="partner-td">Meals 1</td>
                  <td className="partner-td">Driver Schedule 1</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr className="partner-tr">
                  <td className="partner-td">2</td>
                  <td className="partner-td">Drive Name 2</td>
                  <td className="partner-td">Member Name 2</td>
                  <td className="partner-td">Meals 2</td>
                  <td className="partner-td">Driver Schedule 2</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>                
                <tr className="partner-tr">
                  <td className="partner-td">3</td>
                  <td className="partner-td">Drive Name 3</td>
                  <td className="partner-td">Member Name 3</td>
                  <td className="partner-td">Meals 3</td>
                  <td className="partner-td">Driver Schedule 3</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr className="partner-tr">
                  <td className="partner-td">4</td>
                  <td className="partner-td">Drive Name 4</td>
                  <td className="partner-td">Member Name 4</td>
                  <td className="partner-td">Meals 4</td>
                  <td className="partner-td">Driver Schedule 4</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr className="partner-tr">
                  <td className="partner-td">5</td>
                  <td className="partner-td">Drive Name 5</td>
                  <td className="partner-td">Member Name 5</td>
                  <td className="partner-td">Meals 5</td>
                  <td className="partner-td">Driver Schedule 5</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
                </tr>
                <tr className="partner-tr">
                  <td className="partner-td">6</td>
                  <td className="partner-td">Drive Name 6</td>
                  <td className="partner-td">Member Name 6</td>
                  <td className="partner-td">Meals 6</td>
                  <td className="partner-td">Driver Schedule 6</td>
                  <td className="partner-td"><input type="button" value="Proses" /> | <input type="button" value="Detail" /></td>
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
