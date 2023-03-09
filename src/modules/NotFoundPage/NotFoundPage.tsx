import React from 'react';

export const NotFoundPage: React.FC = () => {
  return (
    <section className="error-page main-container">
      <h1 className="error-page__digit">404</h1>
      <p className="error-page__error-message">
        This page doesn&apos;t exist.
        <br />
        The resourse requested could not be found on this server.
      </p>
    </section>
  );
};
