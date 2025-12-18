import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface ArtefakAttributes {
  id: string; // <--- UBAH KE STRING (UUID)
  pengajuan_dana_id: string; // <--- UBAH KE STRING (Foreign Key)
  jenis_artefak: string; // <--- GANTI NAMA AGAR SESUAI CONTROLLER
  link_drive: string; // <--- GANTI NAMA AGAR SESUAI CONTROLLER
  created_at?: Date;
  updated_at?: Date;
}

export interface ArtefakInput extends Optional<ArtefakAttributes, "id"> {}
export interface ArtefakOutput extends Required<ArtefakAttributes> {}

class ArtefakPengajuanModel extends Model<ArtefakAttributes, ArtefakInput> implements ArtefakAttributes {
  public id!: string;
  public pengajuan_dana_id!: string;
  public jenis_artefak!: string;
  public link_drive!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

ArtefakPengajuanModel.init(
  {
    id: {
      type: DataTypes.STRING, // <--- UBAH TIPE
      // autoIncrement: true, // <--- HAPUS INI
      primaryKey: true,
    },
    pengajuan_dana_id: {
      type: DataTypes.STRING, // <--- UBAH TIPE
      allowNull: false,
    },
    jenis_artefak: { // <--- SESUAIKAN NAMA KOLOM
      type: DataTypes.STRING,
      allowNull: false,
    },
    link_drive: { // <--- SESUAIKAN NAMA KOLOM
      type: DataTypes.TEXT, // Gunakan TEXT agar muat link panjang
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: "t_artefak_pengajuan",
    underscored: true,
  }
);

export default ArtefakPengajuanModel;