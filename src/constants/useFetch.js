import React, {useState} from "react";

const API_URL = ""



fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));