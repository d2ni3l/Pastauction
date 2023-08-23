import React from "react";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";

function postData(data = {}) {
  return axios.post("https://pastauction.com/api/v1/login", data);
}

export const login = () => {
  return useMutation(postData);
};
