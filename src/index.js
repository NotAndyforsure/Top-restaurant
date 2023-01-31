import _ from "lodash";
import "./style.css";
import { header, main, footer } from "./print.js";
const content = document.querySelector("body");

content.appendChild(header());
