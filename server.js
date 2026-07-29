import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import morgan from 'morgan'
import session from 'express-session'
import FileStore from 'session-file-store'
import flash from 'connect-flash'
import engine from 'ejs-mate'

// Configuración para __dirname en módulos ES (type: module)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const FileStoreSession = FileStore(session)

// 1. Configuraciones del motor de vistas (EJS con ejs-mate)
app.engine('ejs', engine)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

// 2. Middlewares de utilidades y registros
app.use(morgan('dev')) // Registro de peticiones HTTP en consola
app.use(express.urlencoded({ extended: true })) // Para leer datos de formularios POST
app.use(express.json()) // Para leer JSON (si usas fetch/APIs)

// 3. Configuración de sesiones con almacenamiento en archivos
app.use(
  session({
    store: new FileStoreSession({
      path: './sessions',
      secret: 'mi_secreto_super_seguro',
      resave: false,
      saveUninitialized: false,
    }),
    secret: 'mi_secreto_super_seguro',
    resave: false,
    saveUninitialized: false,
  })
)

// 4. Configuración de connect-flash para mensajes temporales
app.use(flash())

// 5. Variables globales para las vistas (mensajes flash y sesión)
app.use((req, res, next) => {
  res.locals.success_msg = req.flash('success_msg')
  res.locals.error_msg = req.flash('error_msg')
  res.locals.user = req.session.user || null
  next()
})

// 6. Archivos estáticos (Carpeta public)
app.use(express.static(path.join(__dirname, 'public')))

// 7. Rutas de ejemplo
app.get('/', (req, res) => {
  res.render('index', { title: 'Home??' })
})

// 8. Puerto e inicialización del servidor
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})