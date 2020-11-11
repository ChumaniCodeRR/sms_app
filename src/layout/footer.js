import React from "react";
import './footer.css'

export default function FooterPage() {
  return (
    <div className="footer mt-4">
      <p>&copy; {new Date().getFullYear()} Copyright: Vetro Media SMS App 2020</p>
    </div>
  );
}
