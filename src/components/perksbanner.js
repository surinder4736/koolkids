import React from 'react';

const perksbanner = ({ appName, token }) => {
  if (token) {
    return null;
  }
  return (
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName.toLowerCase()}
        </h1>
        <p>KKK stands for a good cause. Everyone has the right to freedom. Curtailed freedom demand for a strong  action-resistance. Resisting the Illuminati will cause it their supremacy to crumble - paving the way to building a different world. You will be able to be a part of the resistance and contribute to the reestablishment of liberty. Along with this, we offer other things which can be found on the perks page.</p>
      </div>
    </div>
  );
};

export default perksbanner;
