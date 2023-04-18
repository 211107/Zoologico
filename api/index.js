import express from "express"
import userRoutes from "./routes/users.js"
import favoriteRoutes from "./routes/favorites.js"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

app.use("/", userRoutes, favoriteRoutes)

app.listen(8800)