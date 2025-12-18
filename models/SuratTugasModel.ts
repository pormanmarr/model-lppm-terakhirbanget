import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SuratTugasAttributes {
  id: string; // <--- UBAH KE STRING (UUID)
  seminar_id: string; // <--- UBAH KE STRING (Foreign Key)
  nomor_surat?: string;
  file_surat_tugas: string;
  tanggal_terbit: Date;
  created_at?: Date;
  updated_at?: Date;
}

export interface SuratTugasInput extends Optional<SuratTugasAttributes, "id"> {}
export interface SuratTugasOutput extends Required<SuratTugasAttributes> {}

class SuratTugasModel extends Model<SuratTugasAttributes, SuratTugasInput> implements SuratTugasAttributes {
  public id!: string; // <--- UBAH TIPE
  public seminar_id!: string; // <--- UBAH TIPE
  public nomor_surat!: string;
  public file_surat_tugas!: string;
  public tanggal_terbit!: Date;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SuratTugasModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH TIPE
      // autoIncrement: true, // <--- HAPUS INI
      primaryKey: true,
    },
    seminar_id: {
      type: DataTypes.STRING, // <--- UBAH TIPE
      allowNull: false,
    },
    nomor_surat: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    file_surat_tugas: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_terbit: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "t_surat_tugas",
    underscored: true,
  }
);

export default SuratTugasModel;