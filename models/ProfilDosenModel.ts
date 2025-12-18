import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface ProfilDosenAttributes {
  id: string;
  user_id: string;
  
  // ✅ UPDATE: Tambahkan tanda tanya (?) agar menjadi Optional
  nidn?: string; 
  prodi?: string;
  jabatan_fungsional?: string; 
  sinta_id?: string;
  scopus_id?: string;
  
  // Kolom tambahan (biasanya ada di DB)
  no_hp?: string;
  nama_bank?: string;
  no_rekening?: string;
  ttd_path?: string;

  created_at?: Date;
  updated_at?: Date;
}

export interface ProfilDosenInput
  extends Optional<ProfilDosenAttributes, "id"> {}
export interface ProfilDosenOutput extends Required<ProfilDosenAttributes> {}

class ProfilDosenModel
  extends Model<ProfilDosenAttributes, ProfilDosenInput>
  implements ProfilDosenAttributes
{
  public id!: string;
  public user_id!: string;
  
  // ✅ UPDATE: Ubah deklarasi tipe agar menerima null/undefined
  public nidn!: string; 
  public prodi!: string;
  public jabatan_fungsional!: string;
  public sinta_id!: string;
  public scopus_id!: string;
  
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ProfilDosenModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING,
      allowNull: false, // User ID tetap wajib
    },
    nidn: {
      type: DataTypes.STRING,
      // ✅ UPDATE: Ubah jadi TRUE agar sinkron dengan PgAdmin
      allowNull: true, 
      unique: true,
    },
    prodi: {
      type: DataTypes.STRING,
      // ✅ UPDATE: Ubah jadi TRUE agar sinkron dengan PgAdmin
      allowNull: true, 
    },
    jabatan_fungsional: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    sinta_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    scopus_id: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    // Pastikan kolom lain juga nullable jika di DB nullable
  },
  {
    sequelize: db,
    tableName: "m_profil_dosen",
    underscored: true,
    timestamps: true, // Pastikan timestamps aktif jika menggunakan created_at/updated_at
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
);

export default ProfilDosenModel;