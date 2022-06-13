import React from "react";
import { Link } from "react-router-dom";

function ChangeTheme() {
  return (
    <div>
      <Link to="/antdesign">Antdesign</Link>
      <br />
      <Link to="/semanticui">SemanticUI</Link>
    </div>
  );
}
export default ChangeTheme;
