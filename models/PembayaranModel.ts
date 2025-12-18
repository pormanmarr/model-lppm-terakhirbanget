import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface PembayaranAttributes {
  id: string; // <--- UBAH KE STRING
  pengajuan_dana_id: string; // <--- UBAH KE STRING
  jumlah_dibayarkan: number; // <--- Nama disesuaikan
  bukti_transfer: string; // <--- Nama disesuaikan
  tanggal_bayar: Date; // <--- Nama disesuaikan
  status: string; // <--- Kolom Baru
  created_at?: Date;
  updated_at?: Date;
}

export interface PembayaranInput extends Optional<PembayaranAttributes, "id"> {}
export interface PembayaranOutput extends Required<PembayaranAttributes> {}

class PembayaranModel extends Model<PembayaranAttributes, PembayaranInput> implements PembayaranAttributes {
  public id!: string;
  public pengajuan_dana_id!: string;
  public jumlah_dibayarkan!: number;
  public bukti_transfer!: string;
  public tanggal_bayar!: Date;
  public status!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

PembayaranModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      primaryKey: true,
      // Hapus autoIncrement
    },
    pengajuan_dana_id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      allowNull: false,
    },
    jumlah_dibayarkan: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    bukti_transfer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_bayar: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'lunas',
    },
  },
  {
    sequelize: db,
    tableName: "t_pembayaran",
    underscored: true,
  }
);

export default PembayaranModel;