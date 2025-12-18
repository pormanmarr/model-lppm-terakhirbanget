import { DataTypes, Model, Optional } from "sequelize";
import db from "../utils/dbUtil";

interface SeminarReviewAttributes {
  id: string;
  seminar_id: string;
  reviewer_id: string;
  catatan_review?: string;
  balasan_revisi?: string; // ✅ UPDATE 1: Tambahkan properti balasan_revisi
  keputusan?: 'minor' | 'major' | 'accept';
  status: 'menunggu' | 'proses' | 'menunggu_perbaikan' | 'selesai' | 'ditolak';
  created_at?: Date;
  updated_at?: Date;
}

export interface SeminarReviewInput extends Optional<SeminarReviewAttributes, "id"> {}
export interface SeminarReviewOutput extends Required<SeminarReviewAttributes> {}

class SeminarReviewModel extends Model<SeminarReviewAttributes, SeminarReviewInput> implements SeminarReviewAttributes {
  public id!: string;
  public seminar_id!: string;
  public reviewer_id!: string;
  public catatan_review!: string;
  public balasan_revisi!: string; // ✅ UPDATE 2: Tambahkan di class properties
  public keputusan!: 'minor' | 'major' | 'accept';
  public status!: 'menunggu' | 'proses' | 'menunggu_perbaikan' | 'selesai' | 'ditolak';
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

SeminarReviewModel.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    seminar_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reviewer_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    catatan_review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    // ✅ UPDATE 3: Definisi kolom database
    balasan_revisi: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    keputusan: {
      type: DataTypes.ENUM('minor', 'major', 'accept'),
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM('menunggu', 'proses', 'menunggu_perbaikan', 'selesai', 'ditolak'),
      defaultValue: 'menunggu',
    },
  },
  {
    sequelize: db,
    tableName: "t_seminar_review",
    underscored: true,
  }
);

export default SeminarReviewModel;