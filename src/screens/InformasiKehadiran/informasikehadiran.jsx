import { AreaTop,AttendanceCards } from "../../components";
import AttendanceListCard from "../../components/dashboard/AttendanceDetail/AttendanceListcard";
import CardVariants from "../../components/dashboard/AttendanceDetail/AttendanceListcard";
const InformasiKehadiran = () => {
  return (
    <div className="content-area">
      <AreaTop/>
      <h1>Jadwal Perkuliahan Hari ini</h1>
      
      <AttendanceCards/>
   
      <AttendanceListCard/>
      <p>Halaman ini berisi informasi mengenai IPS mahasiswa.</p>
    </div>
  );
};

export default InformasiKehadiran;
