import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Ipk.scss";

const IpkChart = () => {
  const [ipkData, setIpkData] = useState([]); // State untuk menyimpan data IPS
  const nim = localStorage.getItem("nim"); // Ambil NIM dari localStorage

  useEffect(() => {
    if (nim) {
      fetch(`http://localhost:3000/monitoring/unama/v1/ipk/ips-semester/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nim: nim }),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Response data adalah:", data); // Log respons API
          const formattedData = Array.isArray(data.data) // Sesuaikan jika respons memiliki properti `data`
            ? data.data.map((item) => ({
                semester: `Semester ${item.semester_ke}`,
                ips: item.ips,
              }))
            : [];
          setIpkData(formattedData);
        })
        .catch((error) => console.error("Error fetching IPS data:", error));
    }
  }, [nim]);
  


  return (
    <div className="ipk-chart-container">
      <h3 className="ipk-title">Grafik Perkembangan IPS</h3>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart
          data={ipkData} // Gunakan data dari state
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="semester" /> {/* Menampilkan label semester */}
          <YAxis domain={[2.5, 4.0]} /> {/* Rentang nilai IPS */}
          <Tooltip />
          <Bar dataKey="ips" fill="#ff207d" /> {/* Bar untuk nilai IPS */}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default IpkChart;
