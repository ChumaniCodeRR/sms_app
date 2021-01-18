import React from "react";
import './footer.css'
import Link from "@material-ui/core/Link";

export default function FooterPage() {
  return (
    <div className="footer ">
      {new Date().getFullYear()}
        {"."}
        {"Copyright © "}Welcome to Vetro Media SMS App. All rights reserved |
        Design by &nbsp;
        <Link color="primary" href="https://www.vetro.co.za/">
          www.vetro.co.za
        </Link>{" "}
    </div>
  );
}
