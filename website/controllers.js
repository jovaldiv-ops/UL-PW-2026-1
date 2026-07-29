// website/controllers.js
export function home(req, res) {
  return res.render('index', {
    title: 'Crear cuenta',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}
