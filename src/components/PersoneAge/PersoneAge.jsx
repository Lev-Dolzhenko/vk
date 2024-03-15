import React, { useState, useEffect } from "react";
import axios from "axios";

const PersoneAge = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sameName, setSameName] = useState("");
  let timerId = null;
  let source = axios.CancelToken.source();

  useEffect(() => {
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      if (name) {
        handleRequest();
      }
    }, 3000);
    return () => clearTimeout(timerId);
  }, [name]);

  useEffect(() => {
    return () => {
      source.cancel("Предыдущий запрос был отменен");
    };
  }, []);

  const handleRequest = async () => {
    if (sameName === name) {
      return alert("Вы вводите имя, которое уже было запрошенно");
    } else {
      setSameName(name);
      try {
        source = axios.CancelToken.source();
        axios
          .get("https://api.agify.io/", {
            params: {
              name: name,
            },
            cancelToken: source.token,
          })
          .then((response) => {
            setAge(response.data.age);
          });
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log("Запрос отменен:", err.message);
        } else {
          console.warn(err);
        }
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sameName === name) {
      return alert("Вы вводите имя, которое уже было запрошенно");
    } else {
      setSameName(name);
      handleRequest();
    }
  };

  const handleInputChange = (e) => {
    setName(e.target.value);
    source.cancel("Отправлен новый запрос.");
  };

  return (
    <form onSubmit={handleSubmit} className="common__wrapper">
      <input
        className="common__input"
        type="text"
        onChange={(e) => {
          setName(e.target.value);
          handleInputChange;
        }}
      />
      <span>{age}</span>
      <button className="common__button">Выполнить запрос</button>
    </form>
  );
};

export default PersoneAge;
