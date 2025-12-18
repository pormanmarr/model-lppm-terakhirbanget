import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface NotifikasiAttributes {
  id: string; 
  user_id: string; // <--- UBAH DARI number KE string (UUID)
  judul: string;
  pesan: string;
  tipe: 'success' | 'warning' | 'info' | 'error';
  url_target?: string;
  is_read: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface NotifikasiInput extends Optional<NotifikasiAttributes, "id"> {}
export interface NotifikasiOutput extends Required<NotifikasiAttributes> {}

class NotifikasiModel extends Model<NotifikasiAttributes, NotifikasiInput> implements NotifikasiAttributes {
  public id!: string;
  public user_id!: string; // <--- UBAH DARI number KE string
  public judul!: string;
  public pesan!: string;
  public tipe!: 'success' | 'warning' | 'info' | 'error';
  public url_target!: string;
  public is_read!: boolean;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

NotifikasiModel.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    user_id: {
      type: DataTypes.STRING, // <--- UBAH DARI BIGINT KE STRING (UUID)
      allowNull: false,
    },
    judul: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pesan: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    tipe: {
      type: DataTypes.ENUM('success', 'warning', 'info', 'error'),
      defaultValue: 'info',
    },
    url_target: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    is_read: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    sequelize: db,
    tableName: "t_notifikasi",
    underscored: true,
  }
);

export default NotifikasiModel;