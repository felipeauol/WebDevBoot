const express = require('express');

const app = express();

app.set('view engine', 'EJS');
app.use(express.static('public'));

app.get('/', () => {
  app.render('landing');
});

app.get('/campgrounds', () => {
  const campgrounds = [{
    name: 'Cumberland Island Primitive',
    img: 'url',
  },
  {
    name: 'Cumberland Island Regular',
    img: 'url',
  },
  {
    name: 'Cayo Costa',
    img: 'url',
  },
  ];
  app.render('campground', {
    campgrounds,
  });
});
