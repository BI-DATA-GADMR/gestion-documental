import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { supabase } from "../utility/SupabaseClient";

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);



const login =  async (email, password) =>
supabase.auth.signInWithPassword({ email, password });

const AuthProvider = ({ children }) => {


  const [user, setUser] = useState(null);
  const [auth, setAuth] = useState(false);

  async function getClientes() {

    try {
      const { data, error } = await supabase
        .from("pacPlanificacion")
        .select("*");
      
      console.log(data)
      console.log(error)

      return data

    } catch (error) {

      return error
    }
  }

  async function addClient (cliente) {

  const  {codigo,nombreProgramaFinanciero, partida,	nombrePartida,	codigoOrientadorGasto, descripcionGasto,	asignacionInicial,	codificado,	reformaPresupuesto,	presupuestoCodificado2023,	traspasos, presupuestoCodificado, id} = cliente;

  const agenteUid = user.id;
    console.log(cliente)
    try {
      const { data, error } = await supabase
        .from("pacPlanificacion")
        .insert( {codigo,nombreProgramaFinanciero, partida,	nombrePartida,	codigoOrientadorGasto, descripcionGasto,	asignacionInicial,	codificado,	reformaPresupuesto,	presupuestoCodificado2023,	traspasos, presupuestoCodificado, id})
        .single()
        console.log(error)
      if(error !== null){return "FAIL"}

      return "OK"
    } catch (error) {
      return "FAIL"
    }
  }

  
  async function updateClient (cliente) {
    const {codigo,nombreProgramaFinanciero, partida,	nombrePartida,	codigoOrientadorGasto, descripcionGasto,	asignacionInicial,	codificado,	reformaPresupuesto,	presupuestoCodificado2023,	traspasos, presupuestoCodificado, id} = cliente;
    
    try {
      const { data, error } = await supabase
      .from('pacPlanificacion')
      .update({codigo,nombreProgramaFinanciero, partida,	nombrePartida,	codigoOrientadorGasto, descripcionGasto,	asignacionInicial,	codificado,	reformaPresupuesto,	presupuestoCodificado2023,	traspasos, presupuestoCodificado, id})
      .eq('id', cliente.id)
      .select()

      return "OK"
    } catch (error) {
      return "FAIL"
    }
  }

  async function deleteClient (id) {
    
    try {
      const { data, error } = await supabase
      .from('pacPlanificacion')
      .delete()
      .eq('id', id)
      .select()

      return "OK"
    } catch (error) {
      return "FAIL"
    }
  }

 async function uploadDocument(file) {
    const uuid = uuidv4();
    const { data, error } = await supabase
      .storage
      .from('images')
      .upload(user.id + "/" + uuid, file)  // Cooper/ASDFASDFASDF uuid, taylorSwift.png -> taylorSwift.png

    if(data) {
      console.log(data);

      return data;
    } 
      console.log(error);

      return error;
   

    
  }



  useEffect(() => {

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_IN") {
        setUser(session.user);
        setAuth(true);
      }
    });
    return () => {
      data.subscription.unsubscribe();
    };
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, getClientes,addClient,updateClient,deleteClient,uploadDocument }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;