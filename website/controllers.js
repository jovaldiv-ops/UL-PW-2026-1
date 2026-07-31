// website/controllers.js
export function home(req, res) {
  return res.render('home', {
    title: 'Crear cuenta',
    currentPage: 'home',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function about(req, res) {
  return res.render('about', {
    title: 'Acerca de',
    currentPage: 'about',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}


export function contact(req, res) {
  return res.render('contact', {
    title: 'Acerca de',
    currentPage: 'contact',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}

export function players(req, res) {
  return res.render('players', {
    title: 'Acerca de',
    currentPage: 'players',
    description:
      'Esta es una aplicación de ejemplo creada con Node.js, Express y EJS.'
  });
}
