import {
  AreaCards,
  AreaCharts,
  AreaTable,
  AreaTop,
  AttendanceCards,
  GpaCards,
  UktCards,
  Ipk,
} from "../../components";
import AttendancCardsu from "../../components/dashboard/all";
import TableKehadiran from "../../components/dashboard/TableKehadiran";
const Dashboard = () => {
  return (
    <div className="content-area">
      <AreaTop />
<h2>Rekap Absensi </h2>
      <TableKehadiran />
      {/* <AttendanceCards/> */}
      <h2>Informasi Akademik</h2>
      <GpaCards />

      <UktCards />
      <Ipk/>
      {/*   <AttendanceList/> */}
      {/* <AreaCharts /> */}
      {/*<AreaTable />
      <AreaTable /> */}
    </div>
  );
};

export default Dashboard;
