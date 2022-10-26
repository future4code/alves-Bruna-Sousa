import axios from "axios";
import { API } from "../Global/constants";

export const ApiService = {
    setStore: newStore => contextStore.value = newStore,

    getStores: ()=>{
        return axios.get(`${API.url}clientes/cliente_01/`);
    },
    getStoreData: ()=>{
        return axios.get(`${API.url}lojas/${contextStore}/`);
    },
    getStoreProducts: (slug='')=>{
        return axios.get(`${API.url}categorias/${slug}/`);
    },
    getProductDetail: (id='')=>{
        return axios.get(`${API.url}produtos/?ids=${id}`);
    },
    getProductsDetail: (ids=[])=>{
        const idsPayload = ids.join();
        return axios.get(`${API.url}produtos/?ids=${idsPayload}`);
    }
}

export const contextStore = {value:''};