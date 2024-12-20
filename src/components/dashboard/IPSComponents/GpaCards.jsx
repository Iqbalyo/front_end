import React, { useEffect, useState } from "react";
import GpaCard from "./GpaCard";
import "./GpaCards.scss";
import Avatar from "@mui/material/Avatar";

const GpaCards = () => {
  const [mahasiswa, setMahasiswa] = useState(null); // State untuk menyimpan data mahasiswa
  const [ipk, setIpk] = useState(null); // State untuk menyimpan IPK
  const [ips, setIps] = useState(null); // State untuk menyimpan IPK
  const nim = localStorage.getItem("nim"); // Ambil NIM dari localStorage
  const nama = localStorage.getItem("nama"); // Ambil Nama dari localStorage

  useEffect(() => {
    if (nim) {
      // Fetch data mahasiswa dari API
      fetch(`http://localhost:3000/monitoring/unama/v1/ipk/dataipk`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nim: nim }), // Kirim NIM untuk mengambil data IPK
      })
        .then((response) => response.json())
        .then((data) => {
          setIpk(data.ipk);
          setIps(data.ips);
        })
        .catch((error) => console.error("Error fetching IPK data:", error));
      
      // Fetch data mahasiswa (optional, jika Anda ingin menampilkan info mahasiswa)
      fetch(`http://localhost:3000/api/mahasiswa/${nim}`)
        .then((response) => response.json())
        .then((data) => setMahasiswa(data))
        .catch((error) => console.error("Error fetching mahasiswa data:", error));
    }
  }, [nim]);

  return (
    <section className="content-area-cards">
      {ips ? (
        <GpaCard
          colors={["#e4e8ef", "#475be8"]}
          cardInfo={{
            title: "Indeks Prestasi ",
            value: ipk,
            text: `IP semester ini.`,
          }}
        />
      ) : (
        <p>Loading IPK...</p>
      )}

      {/* Card kedua - Informasi Mahasiswa */}
      {mahasiswa ? (
        <GpaCard
          colors={["#e4e8ef", "#475be8"]}
          cardInfo={{
            text: (
              <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                {/* Memperbesar avatar */}
                <Avatar
                  alt={mahasiswa.nama}
                  src="https://via.placeholder.com/150" // Ganti dengan URL avatar jika tersedia
                  style={{ width: 80, height: 80 }} // Avatar lebih besar
                />
                <div>
                  {/* Menambahkan fontSize 18px pada nama */}
                  <h4 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>{nama}</h4>
                  <p style={{ margin: 0, fontSize: "14px", color: "#555" }}>NIM: {nim}</p>
                  {/* IPK di samping NIM */}
                  <p style={{ marginTop: "8px", fontSize: "16px", color: "#555" }}>IPK: {ipk}</p> {/* Tampilkan IPK */}
                </div>
              </div>
            ),
          }}
          className="gpa-card-secondary"
        />
      ) : (
        <p>Loading data mahasiswa...</p>
      )}
    </section>
  );
};

export default GpaCards;
