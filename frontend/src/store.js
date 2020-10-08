import Vue from 'vue';
import Vuex from 'vuex';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: [],
    },
// MUTATIONS ===============
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);  
        },
        updateMessage(state, updateMessage){
            console.log("update message",updateMessage)
        }
    },
    actions: {
// GET ARTICLE ===============
        async getMessages({ commit }) {
            let messages = (await axios.get("http://localhost:3000/messages")).data
            let getHeadline = [];
            for(let i = 0; i < messages.length; i++){
                getHeadline.push(messages[i].headline);
            }
            commit('updateMessages', getHeadline);
        },
// NEW ARTICLE ===============
        async newArticle({ commit }, messageBody) {
            let msg = (await axios.post("http://localhost:3000/messages", {
                message : messageBody
            })).data;
            console.log("new===",msg)
            commit('newMessage', msg.message);
        },
// UPDATE ARTICLE ===============
        async updateArticle({ commit }, updateArticle) {
            let msg = (await axios.post("http://localhost:3000/messages/edit", {
                message : updateArticle
            })).data;
            commit('updateMessage', msg.message);
        },
// DELETE ARTICLE ===============
        async deleteArticle({ commit }, deleteArticle) {
            let msgg = (await axios.post("http://localhost:3000/messages/delete", {
                message : deleteArticle
            })).data;
            commit('updateMessage', msgg.message);
        },
// GET ARTICLE ===============
        async getMessage({ commit }, id) {
            return axios.get(`http://localhost:3000/messages/${id}`)
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