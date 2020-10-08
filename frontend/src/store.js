import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articles: [],
    },
// MUTATIONS ===============
    mutations: {
        updateArticles(state, articles) {
            state.articles = articles;
        },
        newArticle(state, articles) {
            state.articles.push(articles);  
        },
        updateArticle(state, articles){
        }
    },
    actions: {
// GET ARTICLE ===============
        async getArticles({ commit }) {
            let articles = (await axios.get("http://localhost:3000/articles")).data
            let getHeadline = [];
            for(let i = 0; i < articles.length; i++){
                getHeadline.push(articles[i].headline);
            }
            commit('updateArticles', getHeadline);
        },
// NEW ARTICLE ===============
        async newArticle({ commit }, newArticle) {
            let msg = (await axios.post("http://localhost:3000/articles", {
                articles : newArticle
            })).data;
            commit('newArticle', msg.articles);
        },
// UPDATE ARTICLE ===============
        async updateArticle({ commit }, updateArticle) {
            let msg = (await axios.post("http://localhost:3000/articles/edit", {
                articles : updateArticle
            })).data;
            commit('updateArticle', msg.articles);
        },
// DELETE ARTICLE ===============
        async deleteArticle({ commit }, deleteArticle) {
            let msg = (await axios.post("http://localhost:3000/articles/delete", {
                articles : deleteArticle
            })).data;
            commit('updateArticle', msg.articles);
        },
// GET ARTICLE ===============
        async getArticle({ commit }, id) {
            return axios.get(`http://localhost:3000/articles/${id}`)
        },
// REGISTER USER ===============
        async register({ commit }, registerData) {
            let token = (await axios.post("http://localhost:3000/register", registerData)).data;
            localStorage.setItem("token", token)
            axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
            // axios.defaults.headers.common['Authorization'] = user.id;
        },
    }
})