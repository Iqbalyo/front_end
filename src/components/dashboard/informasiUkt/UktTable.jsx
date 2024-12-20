import React from "react";
import { Table } from 'antd';
import './UktTable.module.css'; // Import CSS Modules
import UktData from "./UktData";
import "./Ukt.scss";

const UktTable = () => {
  const columns = [
    {
      title: 'Semester',
      dataIndex: 'semester',
      key: 'semester',
    },
    {
      title: 'Tanggal Pembayaran',
      dataIndex: 'tanggalPembayaran',
      key: 'tanggalPembayaran',
    },
    {
      title: 'Metode Pembayaran',
      dataIndex: 'metodePembayaran',
      key: 'metodePembayaran',
    },
    {
      title: 'Jumlah Pembayaran',
      dataIndex: 'jumlahPembayaran',
      key: 'jumlahPembayaran',
    },
    {
      title: 'Bank & Atas Nama',
      dataIndex: 'bankAtasNama',
      key: 'bankAtasNama',
    },
  ];

  return (
    <div className="ukt-table-container">
      <h3 className="ukt-title">Riwayat Pembayaran UKT</h3>
      <Table 
        columns={columns} 
        dataSource={UktData} 
        scroll={{ x: '100%' }} // Tambahkan scroll horizontal
      />
    </div>
  );
};

export default UktTable;
