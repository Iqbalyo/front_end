import { AreaTop, GpaCards } from "../../components";
import IpkChart from "../../components/dashboard/ipk/IpkChart";
const IpkMahasiswa = () => {
  return (
    <div className="content-area">
       <AreaTop/>
       <GpaCards/>  
<IpkChart/>
      
   
      <p>Halaman ini berisi informasi mengenai IPS mahasiswa.</p>
    </div>
  );
};

export default IpkMahasiswa;
