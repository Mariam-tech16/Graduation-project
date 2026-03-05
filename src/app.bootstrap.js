
import  {NODE_ENV, port}  from '../config/config.service.js'
import { authRouter, userRouter } from './modules/index.js'
import express from 'express'

function bootstrap() {
    const app = express()

    //convert buffer data
    app.use(express.json())

    //application routing
    app.use('/metro-tickets/auth', authRouter)   // ← signup, login, forgotPassword, resetPassword
    app.use('/metro-tickets/user', userRouter)   // ← getMe, updateMe, deleteMe


    //invalid routing
    app.use('{/*dummy}', (req, res) => {
        return res.status(404).json({ message: "Invalid application routing" })
    })

    //===============ERROR-HANDLING==================

// ——————— use statusCode from AppError  ————————
app.use((error, req, res, next) => {
  const statusCode = error.statusCode ?? 500;
  const status = error.status ?? 'error';
  
  return res.status(statusCode).json({
    status,
    message: error.message,
    stack: NODE_ENV == "development" ? error.stack : undefined
  });
});

//———————FOR TRIAL ONLY———————

  /*   app.use((error, req, res, next) => {
        const status = error.cause?.status ?? 500
        return res.status(status).json({
            error,
            error_message:
                status == 500 ? 'something went wrong' : error.message ?? 'something went wrong',
            stack: NODE_ENV == "development" ? error.stack : undefined
        })
    })
 */
   const server =  app.listen(port, () => console.log(`🚀 App running on port ${port}...`))
   return server;
}
export default bootstrap