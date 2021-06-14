import React from "react";

import { GoogleLogin } from "react-google-login";

const handleLoginDetails = async (googleData) => {
  console.log(googleData);
  const res = await fetch("http://localhost:3000/api/v1/auth/google", {
    method: "POST",
    body: JSON.stringify({
      token: googleData.tokenId,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data1 = await res.json();
  // store returned user somehow
  console.error(data1);
};

export default function GoLogin({ clientId }) {
  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Login"
      onSuccess={handleLoginDetails}
      onFailure={handleLoginDetails}
      cookiePolicy={"single_host_origin"}
    />
  );
}
