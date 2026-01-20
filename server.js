
import { connectDb } from './src/config/db.js';
import app from './src/app.js'





connectDb()
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`);
})