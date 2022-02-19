// import mongoose
import mongoose from "mongoose";

// Create a Schema
const Switch = mongoose.Schema(
  {
    "name": {
      "type": "String"
    },
    "slug": {
      "type": "String"
    },
    "type": {
      "type": "String"
    },
    "series": {
      "type": "String"
    },
    "loudness": {
      "type": "String"
    },
    "box": {
      "type": "String"
    },
    "pins": {
      "type": "String"
    },
    "manufacturer": {
      "type": "String"
    },
    "brand": {
      "type": "String"
    },
    "designer": {
      "type": "String"
    },
    "pretravel": {
      "type": "String"
    },
    "travel": {
      "type": "String"
    },
    "initialForce": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "tactilePeak": {
      "type": "String"
    },
    "actuatingForce": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "springWeight": {
      "$numberInt": {
        "type": "Date"
      }
    },
    "springType": {
      "type": "String"
    },
    "springMaterial": {
      "type": "String"
    },
    "topMaterial": {
      "type": "String"
    },
    "topColor": {
      "type": "String"
    },
    "topOpacity": {
      "$numberDouble": {
        "type": "Date"
      }
    },
    "bottomMaterial": {
      "type": "String"
    },
    "bottomColor": {
      "type": "String"
    },
    "bottomOpacity": {
      "$numberDouble": {
        "type": "Date"
      }
    },
    "stemMaterial": {
      "type": "String"
    },
    "stemColor": {
      "type": "String"
    },
    "stemOpacity": {
      "type": "String"
    },
    "upc": {
      "type": "String"
    },
    "notes": {
      "type": "String"
    },
    "source": {
      "type": "String"
    }
  },
  { timestamps: true }
);

// export model
export default mongoose.model("Switch", Switch);
