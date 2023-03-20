import mongoose from "mongoose";

mongoose.connect(process.env.DATA_BASE ?? '')
  .then(() => {
    console.log('new connection')
  }).catch(() => {
    console.log('connection failed')
  })

export default mongoose