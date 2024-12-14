import { useState, useEffect, useCallback } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  serverTimestamp,
  query,
  orderBy,
} from "firebase/firestore";

const useMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const addMessage = async (sender, message) => {
    try {
      await addDoc(collection(db, "messages"), {
        sender,
        message,
        timestamp: serverTimestamp(),
      });
      console.log("Message added successfully!");
    } catch (err) {
      setError(err.message);
    }
  };

  const getMessages = useCallback(async () => {
    setLoading(true);
    try {
      const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const messagesData = [];
      snapshot.forEach((doc) => {
        messagesData.push({ id: doc.id, ...doc.data() });
      });
      setMessages(messagesData);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  const getMessageById = async (id) => {
    try {
      const docRef = doc(db, "messages", id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error("No such document!");
      }
    } catch (err) {
      setError(err.message);
      return null;
    }
  };

  useEffect(() => {
    getMessages();
  }, [getMessages]);

  return {
    messages,
    addMessage,
    getMessageById,
    loading,
    error,
  };
};

export default useMessages;
