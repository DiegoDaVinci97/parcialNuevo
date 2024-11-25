import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import MovieDetails from '../views/MovieDetails.vue';
import FavoritesPage from '../views/FavoritesPage.vue';  

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/movie/:id',
    name: 'MovieDetails',
    component: MovieDetails,
    props: true,
  },
  {
    path: '/favorites',
    name: 'FavoritesPage',  
    component: FavoritesPage,  
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;