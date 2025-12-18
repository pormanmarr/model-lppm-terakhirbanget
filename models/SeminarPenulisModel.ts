import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SeminarPenulisAttributes {
  id: string; // <--- UBAH KE STRING (UUID)
  seminar_id: string; // <--- UBAH KE STRING
  nama: string; // <--- GANTI 'nama_penulis' JADI 'nama' (Biar sinkron sama Laravel)
  nidn?: string;
  tipe_penulis: string;
  created_at?: Date;
  updated_at?: Date;
}

export interface SeminarPenulisInput extends Optional<SeminarPenulisAttributes, "id"> {}
export interface SeminarPenulisOutput extends Required<SeminarPenulisAttributes> {}

class SeminarPenulisModel extends Model<SeminarPenulisAttributes, SeminarPenulisInput> implements SeminarPenulisAttributes {
  public id!: string; // <--- UBAH TIPE
  public seminar_id!: string; // <--- UBAH TIPE
  public nama!: string; // <--- GANTI NAMA
  public nidn!: string;
  public tipe_penulis!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SeminarPenulisModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH KE STRING
      primaryKey: true,
    },
    seminar_id: {
      type: DataTypes.STRING, // <--- UBAH KE STRING
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nidn: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    tipe_penulis: {
      type: DataTypes.STRING,
      defaultValue: 'Anggota',
    },
  },
  {
    sequelize: db,
    tableName: "t_seminar_penulis",
    underscored: true,
  }
);

export default SeminarPenulisModel;