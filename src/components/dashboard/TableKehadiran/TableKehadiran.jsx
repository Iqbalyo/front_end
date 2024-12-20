
import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TablePagination from '@mui/material/TablePagination'; // Tambahkan untuk pagination
import TextField from '@mui/material/TextField'; // Tambahkan untuk pencarian
import Paper from '@mui/material/Paper';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAbsensiById } from '../../../store/action/userData.action';
import styles from './TableKehadiran.module.css';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: '16px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: '14px',
  },
  '&.clickable': {
    color: theme.palette.common.black,
    cursor: 'pointer',
    fontSize: '16px',
    '&:hover': {
      textDecoration: 'none',
      backgroundColor: theme.palette.action.hover,
    },
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const TableKehadiran = () => {
  const nim = localStorage.getItem('nim');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { absen } = useSelector((state) => state.data);
  console.log(absen)

  // State untuk pagination
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // State untuk pencarian
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (nim) {
      dispatch(getAbsensiById(nim));
    }
  }, [dispatch, nim]);

  // Pagination handler
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Filter data berdasarkan pencarian
  const filteredData = absen?.filter((row) =>
    row.matakuliah_nama.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Data untuk halaman saat ini
  const paginatedData = filteredData?.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleRowClick = (row) => {
    navigate(`/detail/${row.matakuliah_nama}`, { state: row });
  };

  return (
    <TableContainer component={Paper} className={styles.container}>
      <TextField
        label="Cari Mata Kuliah"
        variant="outlined"
        fullWidth
        margin="normal"
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Table sx={{ minWidth: 700 }} aria-label="tabel kehadiran">
        <TableHead>
          <TableRow>
            <StyledTableCell>No</StyledTableCell>
            <StyledTableCell>Nama Mata Kuliah</StyledTableCell>
            <StyledTableCell align="center">Hadir</StyledTableCell>
            <StyledTableCell align="center">Izin</StyledTableCell>
            <StyledTableCell align="center">Tanpa Keterangan</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paginatedData && paginatedData.length > 0 ? (
            paginatedData.map((row, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell>{page * rowsPerPage + index + 1}</StyledTableCell>
                <StyledTableCell
                  className="clickable"
                  onClick={() => handleRowClick(row)}
                >
                  {row.matakuliah_nama}
                </StyledTableCell>
                <StyledTableCell align="center">{row.hadir}</StyledTableCell>
                <StyledTableCell align="center">{row.izin}</StyledTableCell>
                <StyledTableCell align="center">
                  {row.tanpaKeterangan}
                </StyledTableCell>
              </StyledTableRow>
            ))
          ) : (
            <StyledTableRow>
              <StyledTableCell colSpan={5} align="center">
                Tidak ada data absensi
              </StyledTableCell>
            </StyledTableRow>
          )}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={filteredData?.length || 0}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]} // Pilihan jumlah baris per halaman
      />
    </TableContainer>
  );
};

export default TableKehadiran;
