
import { connectDb } from './src/config/db.js';
import app from './src/app.js'
import { welcomeEmail } from './src/utils/email/config/email.js';


connectDb()
welcomeEmail("ojhawhatapp@gmail.com","yamraj Ojha")
const PORT = process.env.PORT


app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}/`);
})