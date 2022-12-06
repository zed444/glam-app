import mongoose from "mongoose";
import { Schema, model, models, Model } from "mongoose";
import { IAlbum } from "../@types/album";
import paginate from "mongoose-paginate-v2";

const AlbumSchema = new Schema<IAlbum>(
  {
    title: {
      type: String,
    },
    artist: {
      type: mongoose.Types.ObjectId,
      ref: "Artist",
    },
    year: {
      type: String,
    },
    format: {
      type: String,
    },
    cover: {
      type: {
        path: String,
        name: String,
      },
    },
    songs: {
      type: {
        title: String,
        duration: String,
      },
    },
    credits: {
      type: {
        lineUp: {
          type: {
            instrument: [String],
            member: {
              type: { type: mongoose.Types.ObjectId, ref: "Artist" },
            },
          },
        },
        addtionalMusicians: {
          type: {
            instrument: [String],
            member: {
              type: { type: mongoose.Types.ObjectId, ref: "Artist" },
            },
          },
        },
        producer: { type: [mongoose.Types.ObjectId], ref: "Artist" },
        mixAndMaster: { type: [mongoose.Types.ObjectId], ref: "Artist" },
      },
    },
    info: {
      type: String,
    },
  },
  {
    timestamps: true,
    toObject: {
      transform: function (doc, ret) {
        delete ret._id;
      },
    },
    toJSON: {
      transform: function (doc, ret, options) {
        ret.id = ret._id.toString();

        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

AlbumSchema.plugin(paginate);

let Album = (models?.Album ||
  mongoose.model("Album", AlbumSchema)) as mongoose.PaginateModel<IAlbum>;

export default Album;
