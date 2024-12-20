import PropTypes from "prop-types";
import { FaCheckCircle } from "react-icons/fa"; // Ikon check untuk status pembayaran
import "./UktCard.scss"; // Tambahkan styling sesuai kebutuhan

const UktCard = ({ paymentDate, paymentAmount }) => {
  return (
    <div className="ukt-card">
      <div className="ukt-card-icon">
        <FaCheckCircle size={40} color="#4CAF50" /> {/* Ikon "Sudah Membayar" */}
      </div>
      <div className="ukt-card-info">
        <h5 className="ukt-title">Status Pembayaran UKT</h5>
        <p className="ukt-status">Sudah Membayar</p>
        <p className="ukt-date">Tanggal: {paymentDate}</p>
        <p className="ukt-amount">Jumlah: Rp {paymentAmount.toLocaleString()}</p>
      </div>
    </div>
  );
};

export default UktCard;

UktCard.propTypes = {
  paymentDate: PropTypes.string.isRequired,
  paymentAmount: PropTypes.number.isRequired,
};
