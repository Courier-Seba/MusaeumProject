import marked from "marked";

marked.setOptions({
  sanitize: true // Change this for a new one
});

export default marked;
