import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface PengajuanDanaAttributes {
  id: string; // <--- UBAH KE STRING (UUID)
  seminar_id: string; // <--- UBAH KE STRING (Foreign Key ke Seminar)
  total_dana_diajukan: number;
  kategori_luaran: string; 
  status_kprodi: 'menunggu' | 'disetujui' | 'ditolak';
  catatan_kprodi?: string;
  status_lppm: 'menunggu' | 'disetujui' | 'ditolak';
  catatan_lppm?: string;
  file_surat_permohonan_lppm?: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface PengajuanDanaInput extends Optional<PengajuanDanaAttributes, "id"> {}
export interface PengajuanDanaOutput extends Required<PengajuanDanaAttributes> {}

class PengajuanDanaModel extends Model<PengajuanDanaAttributes, PengajuanDanaInput> implements PengajuanDanaAttributes {
  public id!: string; // <--- UBAH KE STRING
  public seminar_id!: string; // <--- UBAH KE STRING
  public total_dana_diajukan!: number;
  public kategori_luaran!: string;
  public status_kprodi!: 'menunggu' | 'disetujui' | 'ditolak';
  public catatan_kprodi!: string;
  public status_lppm!: 'menunggu' | 'disetujui' | 'ditolak';
  public catatan_lppm!: string;
  public file_surat_permohonan_lppm!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

PengajuanDanaModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      // autoIncrement: true, // <--- HAPUS INI
      primaryKey: true,
    },
    seminar_id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING
      allowNull: false,
    },
    total_dana_diajukan: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    kategori_luaran: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Prosiding Internasional'
    },
    status_kprodi: {
      type: DataTypes.ENUM('menunggu', 'disetujui', 'ditolak'),
      defaultValue: 'menunggu',
    },
    catatan_kprodi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status_lppm: {
      type: DataTypes.ENUM('menunggu', 'disetujui', 'ditolak'),
      defaultValue: 'menunggu',
    },
    catatan_lppm: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    file_surat_permohonan_lppm: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize: db,
    tableName: "t_pengajuan_dana",
    underscored: true,
  }
);

export default PengajuanDanaModel;