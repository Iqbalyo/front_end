import React, { useEffect, useState } from "react";
import UktCard from "./UktCard";
import "./UktCard.scss"; // Styling tambahan untuk daftar kartu

const UktCards = () => {
  const [mahasiswa, setMahasiswa] = useState(null); // State untuk menyimpan data mahasiswa
  const nim = localStorage.getItem("nim"); // Ambil NIM dari localStorage

  useEffect(() => {
    if (nim) {
      // Fetch data mahasiswa dari API
      fetch(`http://localhost:3000/api/monitoring/unama/v1/user/${nim}`)
        .then((response) => response.json())
        .then((data) => setMahasiswa(data))
        .catch((error) => console.error("Error fetching mahasiswa data:", error));
    }
  }, [nim]);

  return (
    <section className="content-area-cards">
      {/* Menampilkan UktCard jika data mahasiswa ada */}
      {mahasiswa ? (
        <UktCard
          paymentDate="15 November 2024"  // Ganti sesuai kebutuhan
          paymentAmount={4500000}  // Anda bisa menyesuaikan atau menghapus ini jika tidak diperlukan
          paymentStatus={mahasiswa.sts_bayar}  // Ambil sts_bayar dari data mahasiswa
        />
      ) : (
        <p>Loading data mahasiswa...</p>
      )}
    </section>
  );
};

export default UktCards;
